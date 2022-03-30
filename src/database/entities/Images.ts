import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('images')
export class Images {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  uri: string
}
