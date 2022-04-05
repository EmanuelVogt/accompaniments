import { Connection, createConnection } from 'typeorm'

import { entities } from './entities_lookup'
import { migrations } from './migrations_lookup'

export class DatabaseProvider {
  private db_connection: Connection

  constructor(connection: Connection) {
    this.db_connection = connection
  }

  public async createConnection() {
    return (this.db_connection = await createConnection(this.databaseOptions()))
  }

  private databaseOptions(): any {
    return {
      type: 'expo',
      database: 'teste',
      driver: require('expo-sqlite'),
      entities: entities(),
      migrations: migrations(),
      migrationsRun: true,
      synchronize: false
    }
  }
}
