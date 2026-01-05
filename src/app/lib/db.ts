import { MongoClient, Db } from "mongodb";

const dbName = process.env.DB_NAME;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export default async function connect() {
  // Only enforce DATABASE_URL here, when actually connecting (runtime only)
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "Please provide a database URL in your environment variables"
    );
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!url.startsWith("mongodb://") && !url.startsWith("mongodb+srv://")) {
    throw new Error(
      `Invalid MongoDB URL: "${url}". It must start with 'mongodb://' or 'mongodb+srv://'.`
    );
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
  return { client: cachedClient, db: cachedDb };
}
