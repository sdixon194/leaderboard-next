import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import GameBoard from "@/components/GameBoard/GameBoard";
import UserInfo from "@/components/UserInfo/UserInfo";
import LeagueInfo from "@/components/LeagueInfo/LeagueInfo";
import ScoreHistory from "@/components/ScoreHistory/ScoreHistory";
import { Role } from "@/app/generated/prisma/client";

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = await prisma.game.findUnique({
    where: { id: slug },
    include: {
      league: {
        include: {
          players: true,
        },
      },
      scores: {
        include: {
          player: true,
        },
        distinct: ["playerId"],
        orderBy: {
          score: "desc",
        },
      },
    },
  });
  if (!game) {
    notFound();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const currentPlayer =
    game.league.players.find((player) => player.id === session?.user.id) ??
    null;

  const leagueRoles = await prisma.leagueRole.findMany({
    where: { leagueId: game.league.id },
  });

  const playerRole =
    currentPlayer &&
    leagueRoles.find((item) => item.playerId === currentPlayer.id)?.role;

  const allScores = await prisma.score.findMany({
    where: {
      gameId: game.id,
    },
    include: {
      player: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="col-span-12 flex gap-5 my-5 mx-5 flex-wrap">
      <div className="flex-1">
        {currentPlayer && (
          <UserInfo
            player={{
              ...currentPlayer,
              //leagueRoles: playerRole,
              leagueRoles: playerRole ?? Role.VIEWER,
            }}
          />
        )}
      </div>
      <div className="flex-2 bg-white rounded-sm p-2">
        <h1>Game Info</h1>
        <GameBoard game={game} key={game.id} currentPlayer={currentPlayer} />
        <ScoreHistory scores={allScores} currentPlayer={currentPlayer} />
      </div>
      <div className="flex-1">
        <LeagueInfo
          league={game.league}
          players={game.league.players}
          role={playerRole ?? "VIEWER"}
        />
      </div>
    </div>
  );
}
