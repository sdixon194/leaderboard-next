"use server";
import prisma from "@/lib/prisma";
import { notFound } from 'next/navigation';
import GameList from "@/components/GameList/GameList";
import UserInfo from "@/components/UserInfo/UserInfo";
import LeagueInfo from "@/components/LeagueInfo/LeagueInfo"
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function LeaguePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const { slug } = await params;
  const league = await prisma.league.findUnique({
    where: { id: slug },
    include: {
      players: {
        include: {
          leagueRoles: {
            where: {
              leagueId: slug
            },
            select: {
              role: true
            },
          }
        }
      }
    }
  });
  if (!league) {
    notFound();
  }
  const games = await prisma.game.findMany({
    where: {
      leagueId: league.id
    },
    orderBy: {
      updatedAt: "desc"
    },
    include: {
      scores: {
        include: {
          player: true
        },
        distinct: ['playerId'],
        orderBy: {
          score: 'desc',
        }
      },
    }
  });

  const currentPlayer = league.players.find((player) => player.id === session?.user.id)
  const role = currentPlayer ? currentPlayer.leagueRoles[0].role : 'VIEWER';

  return (
    <div className="col-span-12 flex gap-5 my-5 mx-5 flex-wrap">
      <div className='flex-1'>{currentPlayer && <UserInfo player={currentPlayer} />}</div>
      <div className='flex-2 bg-white rounded-sm p-2'>
        <h1>{league.name}</h1>
        <GameList games={games} />
      </div>
      <div className='flex-1'><LeagueInfo league={league} players={league.players} role={role} /></div>
    </div >
  )
}
