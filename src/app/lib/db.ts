import { MongoClient, Db } from "mongodb";

const url = process.env.DATABASE_URL ?? process.env.LOCAL_DB ?? "";
const dbName = process.env.DB_NAME || "userDatabase"; // <-- define this

if (!url) {
  throw new Error("Please provide a database URL in your .env file");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export default async function connect() {
  if (cachedClient && cachedDb) {
    console.log("Using existing MongoDB connection");
    return { client: cachedClient, db: cachedDb };
  }

  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClient?: MongoClient;
    };

    if (!globalWithMongo._mongoClient) {
      globalWithMongo._mongoClient = new MongoClient(url);
      await globalWithMongo._mongoClient.connect();
    }

    cachedClient = globalWithMongo._mongoClient;
  } else {
    cachedClient = new MongoClient(url);
    await cachedClient.connect();
  }

  cachedDb = cachedClient.db(dbName);
  console.log("Created a new MongoDB connection");

  return { client: cachedClient, db: cachedDb };
}
