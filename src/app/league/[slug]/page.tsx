import prisma from "@/lib/prisma";
import { notFound } from 'next/navigation';
import NewGameForm from "@/components/NewGameForm/NewGameForm";

export default async function LeaguePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const league = await prisma.league.findUnique({
    where: { id: slug }
  })
  if (!league) {
    notFound();
  }

  // Loop through games here.

  return (
    <div>
      <h1>{league.name}</h1>
      <NewGameForm ownerId="" leagueId={league.id} />
    </div>
  )
}
