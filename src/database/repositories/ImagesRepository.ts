import { Connection, Repository } from 'typeorm'

import { Images } from '../entities/Images'
interface ICreateImageData {
  uri: string
}

export class ImagesRepository {
  private ormRepository: Repository<Images>

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(Images)
  }

  public async create({ uri }: ICreateImageData): Promise<Images> {
    const image = this.ormRepository.create({
      uri
    })

    await this.ormRepository.save(image)

    return image
  }
}
