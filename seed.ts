import "dotenv/config"; // MUST BE LINE 1
import connect, { closeDb } from "@/app/lib/db";
// import { coursesDetails } from "@/utils/data/coursesData/courses";
import { users } from "@/utils/data/fetchdata/users";

async function seed() {
  console.log("Starting seeding process...");
  try {
    const dbConnection = await connect();
    const db = dbConnection.db;
    const collection = db.collection("user");

    console.log(`Attempting to insert ${users.length} user...`);

    const result = await collection.insertMany(users);
    console.log(`Successfully seeded ${result.insertedCount} user!`);
  } catch (error) {
    console.error("❌ Seeding failed!");
    console.error(error);
  } finally {
    await closeDb();
    console.log("🔌 Database connection closed.");
    process.exit(0);
  }
}

seed();
