import { getConnection } from 'typeorm'

export class Database {
  private database = getConnection('default')

  public async create() {
    this.database.dropDatabase()
  }
}
