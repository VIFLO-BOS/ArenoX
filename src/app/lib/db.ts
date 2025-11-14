import { MongoClient, Db } from "mongodb";

const url =  process.env.DATABASE_URL ??  "";
const dbName = process.env.DB_NAME || "arenox-database"; // <-- define this


if (!url) {
  throw new Error("Please provide a database URL in your .env file");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export default async function connect() {
  if (cachedClient && cachedDb) {
    console.info({ message: "Using existing MongoDB connection" });
    console.log("Using existing MongoDB connection");
    return { client: cachedClient, db: cachedDb };
  }

  if(!url.startsWith("mongodb://") && !url.startsWith("mongodb+srv://")){
    throw new Error(`Invalid MongoDB URL: "${url}". It must start with 'mongodb://' or 'mongodb+srv://'.`);
  }


  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClient?: MongoClient;
    };

    if (!globalWithMongo._mongoClient) {
      console.log(
        `Connecting to MongoDB with URL: ${url.replace(/:([^:@]+)@/, ":****@")}`
      ); // Log URL (mask password for security)
      globalWithMongo._mongoClient = new MongoClient(url);
      await globalWithMongo._mongoClient.connect();
      console.log("connected to DB successfully");
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
