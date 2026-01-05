import { MongoClient } from "mongodb";
import path from "path";


const url = process.env.DATABASE_URL;
const dbName = process.env.DB_NAME;

async function testConnection() {
      if (!url) {
            console.error("No DATABASE_URL found in .env.local");
            return;
      }

      console.log(`Attempting to connect to: ${url.replace(/:([^@]+)@/, ":****@")}`);
      console.log(`Target database: ${dbName || "(default from URI)"}`);

      const client = new MongoClient(url);

      try {
            await client.connect();
            console.log("Successfully connected to MongoDB!");
            const db = client.db(dbName);
            const collections = await db.listCollections().toArray();
            console.log(`Successfully listed ${collections.length} collections in "${db.databaseName}"`);
      } catch (error) {
            console.error("Connection failed:");
            console.error(error);
      } finally {
            await client.close();
      }
}

testConnection();
