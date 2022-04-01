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
  public async initDatabase() {
    if (this.db_connection === undefined) {
      this.db_connection = await createConnection(this.databaseOptions())
    }
    await this.db_connection.runMigrations()
  }

  public async closeConnection() {
    this.db_connection.close()
  }

  public async reinitialize() {
    if (this.db_connection !== undefined) {
      const drop = await this.db_connection.dropDatabase()
      console.log(drop)
      Promise.resolve()
    }

    console.log('faio')
  }

  private databaseOptions(): any {
    return {
      type: 'expo',
      database: 'teste2.db',
      driver: require('expo-sqlite'),
      entities: entities(),
      migrations: migrations(),
      migrationsRun: true,
      synchronize: false
    }
  }
}
