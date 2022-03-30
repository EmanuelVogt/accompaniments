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
            name: 'text',
            type: 'text'
          },
          {
            name: 'is_toggled',
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
