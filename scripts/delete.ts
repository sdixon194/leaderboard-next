require('dotenv').config()
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
async function main() {
  await prisma.user.deleteMany();
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
