import { MongoClient, Db } from "mongodb";

// @ environment-variables : get database connection URL and database name from environment
const url = process.env.DATABASE_URL ?? "";
const dbName = process.env.DB_NAME || "arenox-database";

// @ url-validation : ensure database URL is provided
if (!url) {
  throw new Error("Please provide a database URL in your .env file");
}

// @ connection-caching : cache MongoDB client and database instances for reuse
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// @ connect-function : establish and return MongoDB connection with caching
export default async function connect() {
  // @ return-cached : return existing connection if available
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // @ validate-url-format : ensure URL has correct MongoDB protocol
  if (!url.startsWith("mongodb://") && !url.startsWith("mongodb+srv://")) {
    throw new Error(
      `Invalid MongoDB URL: "${url}". It must start with 'mongodb://' or 'mongodb+srv://'.`
    );
  }

  // @ environment-specific-connection : use global caching in development, fresh connection in production
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
  // @ initialize-database : get database instance and return connection objects
  cachedDb = cachedClient.db(dbName);
  return { client: cachedClient, db: cachedDb };
}
