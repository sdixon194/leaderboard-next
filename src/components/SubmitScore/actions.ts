'use server';
import { redirect, RedirectType } from 'next/navigation';
import prisma from "@/lib/prisma";
import { revalidatePath } from 'next/cache';

export async function submitScore(formData: FormData) {
  const stringScore = formData.get('score') as string;
  const path = formData.get('path') as string;
  const playerId = formData.get('playerId') as string;
  const gameId = formData.get('gameId') as string;
  const score = parseFloat(stringScore);
  await prisma.score.create({
    data: {
      score,
      playerId,
      gameId,
    }
  });
  revalidatePath(path);
  redirect(path, RedirectType.replace);
}
