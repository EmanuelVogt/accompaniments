import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class imageTables1648669285926 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'uri',
            type: 'text'
          },
          {
            name: 'description',
            type: 'boolean'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('imagess')
  }
}
