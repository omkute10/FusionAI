import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Famous Personalities" },
        { name: "Movies and TV" },
        { name: "Musicians" },
        { name: "Scientists" },
        { name: "Philosophers" },
      ],
    });
  } catch (err) {
    console.log("Error seeding default Categories", err);
  } finally {
    await db.$disconnect();
  }
}

main();
