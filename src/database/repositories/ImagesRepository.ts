import { Connection, Repository } from 'typeorm'

import { Images } from '../entities/Images'
interface ICreateImageData {
  uri: string
  description: string
}

export class ImagesRepository {
  private ormRepository: Repository<Images>

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(Images)
  }

  public async create({ uri, description }: ICreateImageData): Promise<Images> {
    const image = this.ormRepository.create({
      uri,
      description
    })

    await this.ormRepository.save(image)

    return image
  }

  public async getAll(): Promise<Images[]> {
    const images = this.ormRepository.find()

    return images
  }
}
