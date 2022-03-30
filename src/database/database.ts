import { Connection, createConnection } from 'typeorm'

import { entities } from './entities'
import { databaseMigrations } from './migrations'

export class DatabaseProvider {
  db_connection: Connection

  public async reinitialize() {
    await this.db_connection.dropDatabase()
    await this.db_connection.runMigrations()
    Promise.resolve()
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

  private databaseOptions(): any {
    return {
      type: 'expo',
      database: 'sr-campo.db',
      driver: require('expo-sqlite'),
      entities: entities(),

      migrations: databaseMigrations(),
      migrationsRun: true,

      synchronize: false
    }
  }
}
