import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Define a global cache for Mongoose
interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Use globalThis to avoid ESLint errors
(globalThis as any).mongoose = (globalThis as any).mongoose || { conn: null, promise: null };

// Use existing cache or initialize a new one
const cached: MongooseCache = (globalThis as any).mongoose;

export default async function connectDB(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => mongoose.connection);
  }

  cached.conn = await cached.promise;
  (globalThis as any).mongoose = cached;
  return cached.conn;
}


