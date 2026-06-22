'use server';
import { redirect, RedirectType } from 'next/navigation';
import prisma from "@/lib/prisma";

export async function submitScore(formData: FormData) {
  const score = formData.get('score') as string;
  const playerId = formData.get('playerId') as string;
  const gameId = formData.get('gameId') as string;
  await prisma.score.create({
    data: {
      score,
      playerId,
      gameId,
    }
  });
  redirect(`/league/${leagueId}`, RedirectType.replace)
}
