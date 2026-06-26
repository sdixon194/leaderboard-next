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
        create: [{ userId: ownerId, role: 'ADMIN' }]
      }
    }
  });

  redirect(`leagues/${league.id}`, RedirectType.push)
}
