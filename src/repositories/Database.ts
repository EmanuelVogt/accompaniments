import { Connection } from 'typeorm'
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
