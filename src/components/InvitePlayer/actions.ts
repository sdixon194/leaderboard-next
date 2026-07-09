'use server';
import { redirect, RedirectType } from 'next/navigation';
import prisma from "@/lib/prisma";

export async function sendInvite(formData: FormData) {
  const leagueId = formData.get("leagueId") as string;
  const email = formData.get("email") as string;
  const user = await prisma.user.findFirst({
    where: { email: email }
  });

  if (!user) {
    redirect(`/leagues/${leagueId}`, RedirectType.replace)
  }

  await prisma.league.update({
    where: {
      id: leagueId
    },
    data: {
      players: {
        connect: [{ id: user.id }]
      },
      leagueRoles: {
        create: [{ playerId: user.id, role: 'PLAYER' }]
      }
    }
  });
  redirect(`/leagues/${leagueId}`, RedirectType.replace)
}
