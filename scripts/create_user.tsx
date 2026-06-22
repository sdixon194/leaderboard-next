require('dotenv').config()
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { signUp } from "@/lib/auth-client";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const res = await signUp.email({
    name: 'test_name',
    email: 'test@gmail.com',
    password: 'testing1',
  });
  console.log(res);
  if (res.error) {
    console.log(res.error.message || "Something went wrong.");
  }
}
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
