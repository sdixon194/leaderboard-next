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

  await prisma.leaguePlayers.create({
    data: {
      userId: user.id,
      leagueId: leagueId
    }
  });
  redirect(`/leagues/${leagueId}`, RedirectType.replace)
}
