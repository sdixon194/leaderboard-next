import prisma from "@/lib/prisma";
import { notFound } from 'next/navigation';
import NewGameForm from "@/components/NewGameForm/NewGameForm";
import GameBoard from "@/components/GameBoard/GameBoard";

export default async function LeaguePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const league = await prisma.league.findUnique({
    where: { id: slug }
  })
  if (!league) {
    notFound();
  }
  const games = await prisma.game.findMany({
    where: {
      leagueId: league.id
    }
  })

  return (
    <div>
      <h1>{league.name}</h1>
      {games ? games.map((game) =>
        <GameBoard game={game} key={game.id} />
      ) : <p>No games found yet!</p>}
      <NewGameForm ownerId="" leagueId={league.id} />
    </div>
  )
}
