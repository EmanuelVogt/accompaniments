import { Connection } from 'typeorm'
import { openDatabase, Query } from 'expo-sqlite'
export class DatabaseRepository {
  private db_connection: Connection

  constructor(connection: Connection) {
    this.db_connection = connection
  }

  public async drop() {
    try {
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}
