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

// Ensure TypeScript recognizes global.mongoose
declare global {
  var mongoose: MongooseCache | undefined;
}

// Use existing cache or initialize a new one
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

export default async function connectDB(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => mongoose.connection);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}


