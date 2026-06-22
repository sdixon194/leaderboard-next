require('dotenv').config()
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
async function main() {
  const first_user = await prisma.user.findFirst();
  if (!first_user) {
    console.log("No user found");
    process.exit();
  }
  await prisma.league.create({
    data: {
      name: "Test League",
      ownerId: first_user.id,
    }
  });
}
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    console.log(adapter);
    console.log("Deleted")
    await prisma.$disconnect();
  });
