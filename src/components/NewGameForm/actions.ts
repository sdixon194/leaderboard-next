'use server';
import { redirect, RedirectType } from 'next/navigation';
import prisma from "@/lib/prisma";

export async function createGame(formData: FormData) {
  const leagueId = formData.get("leagueId") as string;
  const name = formData.get("gameName") as string;
  const platform = formData.get("platform") as string;
  const category = formData.get("category") as string;
  const startDate = formData.get("startDate") as string;
  const startHour = formData.get("startHour") as string;
  const startMinutes = formData.get("startMinutes") as string;
  const endDate = formData.get("endDate") as string;
  const endHour = formData.get("endHour") as string;
  const endMinutes = formData.get("endMinutes") as string;
  const tzOffset = formData.get("tzOffset") as string;
  const timeZone = getTimeZone(Number(tzOffset));
  const startDateUTC = new Date(`${startDate}T${startHour}:${startMinutes}:00.000${timeZone}`)
  const endDateUTC = new Date(`${endDate}T${endHour}:${endMinutes}:00.000${timeZone}`)

  await prisma.game.create({
    data: {
      name,
      category,
      platform,
      leagueId,
      begin: startDateUTC,
      end: endDateUTC,
    }
  });
  redirect(`/league/${leagueId}`, RedirectType.replace)
}

function getTimeZone(offset: number) {
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(Math.abs(offset) / 60)).slice(-2) + ":" + ("00" + (offset % 60)).slice(-2);
}
