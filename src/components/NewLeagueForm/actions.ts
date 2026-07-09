'use server';
import { redirect, RedirectType } from 'next/navigation';
import prisma from "@/lib/prisma";

export async function createLeague(ownerId: string, formData: FormData) {
  const name = formData.get("leagueName") as string;

  const league = await prisma.league.create({
    data: {
      name,
      ownerId,
      players: {
        connect: [{ id: ownerId }]
      },
      leagueRoles: {
        create: [{ role: 'OWNER', playerId: ownerId }]
      }
    }
  });

  redirect(`leagues/${league.id}`, RedirectType.push)
}
