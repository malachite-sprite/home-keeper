import TaskSchema from "../../db/task.schema.mts";
import { DatabaseClient } from "./database-client.mts";
import mongoose from 'mongoose';

type OneOrMore<T> = readonly [T, ...ReadonlyArray<T>];

type ConnectionStringParams = {
  hosts: OneOrMore<{ host: string, port?: string }>,
  credentials?: { username: string, password: string },
  database?: string,
  options?: string,
}

export class MongoClient implements DatabaseClient {
  private connection: mongoose.Connection

  constructor() {
    this.connection = mongoose.createConnection(
      MongoClient.createConnectionString(
        {
          hosts: [{
            host: process.env.MONGO_HOST,
            port: process.env.MONGO_PORT
          }],
          credentials: {
            username: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD
          },
          options: 'retryWrites=true&w=majority&appName=HomeKeeper'
        }
      )
    );
  }
  
  private static createConnectionString({ hosts, credentials, database, options }: ConnectionStringParams) {
    let connectionString = 'mongodb+srv://'

    if (credentials) {
      connectionString += `${credentials.username}:${credentials.password}`
    }

    connectionString += hosts.map(i => [i.host, i.port].join(':')).join(',');

    if (database) {
      connectionString += `/${database}`
    }

    if (options) {
      connectionString += `?${options}`
    }

    return connectionString;
  }

  async getTasks(): Promise<void> {
    const TasksRepository = this.connection.model('Task', TaskSchema)

    const tasks = await TasksRepository.find()

    console.log(tasks)
  }
}