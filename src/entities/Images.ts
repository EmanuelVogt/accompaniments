import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Images')
export class Images {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  uri: string

  @Column()
  description: string
}
