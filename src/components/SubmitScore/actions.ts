'use server';
import { redirect, RedirectType } from 'next/navigation';
import prisma from "@/lib/prisma";

export async function submitScore(formData: FormData) {
  const score = formData.get('score') as string;
  await prisma.score.create({
    data: {
      score,
    }
  });
  redirect(`/league/${leagueId}`, RedirectType.replace)
}
