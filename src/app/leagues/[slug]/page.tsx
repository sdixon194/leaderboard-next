"use server";
import prisma from "@/lib/prisma";
import { notFound } from 'next/navigation';
import NewGameForm from "@/components/NewGameForm/NewGameForm";
import GameList from "@/components/GameList/GameList";
import InvitePlayer from "@/components/InvitePlayer/InvitePlayer";
import PlayerList from "@/components/PlayerList/PlayerList";
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
    where: { id: slug }
  });
  if (!league) {
    notFound();
  }
  const games = await prisma.game.findMany({
    where: {
      leagueId: league.id
    }
  })

  const players = await prisma.leaguePlayers.findMany({
    where: { leagueId: league.id },
    select: {
      user: true,
      role: true,
    }
  });
  const users = players.map(p => p.user);
  const currentPlayer = players.filter(p => p.user.id === session?.user.id);
  const isAdmin = currentPlayer && currentPlayer[0]?.role === 'ADMIN';

  return (
    <div>
      <h1>{league.name}</h1>
      <GameList games={games} />
      <PlayerList players={users} />
      {isAdmin && <NewGameForm league={league} />}
      {isAdmin && <InvitePlayer leagueId={league.id} />}
    </div >
  )
}
