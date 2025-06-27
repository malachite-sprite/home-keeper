export abstract class DatabaseClient {
  abstract getTasks(): Promise<void>;
}