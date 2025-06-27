import { MongoClient } from "../database/mongo-client.mjs";
import { DatabaseClient } from "../database/database-client.mjs";

export type GenericRequest = Pick<Request, 'body' >

export default async (req: GenericRequest) => {
  const databaseClient: DatabaseClient = new MongoClient()

  await databaseClient.getTasks()

  return new Response("Hello, world!")
}