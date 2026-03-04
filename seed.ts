import "dotenv/config"; // MUST BE LINE 1
import dotenv from "dotenv";
import path from "path";

// Explicitly load .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import connect, { closeDb } from "./src/app/lib/db";
import { coursesDetails } from "./src/utils/data/coursesData/courses";

async function seed() {
  console.log("Starting seeding process...");
  try {
    const dbConnection = await connect();
    const db = dbConnection.db;
    const collection = db.collection("course");

    console.log(`Attempting to insert ${coursesDetails.length} course...`);

    const result = await collection.insertMany(coursesDetails);
    console.log(`Successfully seeded ${result.insertedCount} course!`);
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
