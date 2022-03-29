import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('photos')
export class Photos {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  text: string

  @Column()
  is_toggled: boolean
}
