'use server';
import { redirect, RedirectType } from 'next/navigation';
import prisma from "@/lib/prisma";

export async function createGame(leagueId: string, formData: FormData) {
  const name = formData.get("leagueName") as string;
  const league = await prisma.game.create({
    data: {
      name,
      leagueId
    }
  });
  redirect(`league/${league.id}`, RedirectType.push)
}
