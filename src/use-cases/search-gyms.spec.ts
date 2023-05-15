import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Academia do Ze',
      description: 'Academia de judo do Sensei Zé',
      phone: '4935669090',
      latitude: -27.0040557,
      longitude: -51.1351244,
    })

    await gymsRepository.create({
      title: 'Academia do Pedro Bo',
      description: 'Academia de judo do Sensei Zé',
      phone: '4935669090',
      latitude: -27.2040557,
      longitude: -51.0512441,
    })

    const { gyms } = await sut.execute({
      query: 'Academia do Ze',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Academia do Ze' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Academia do Pedro Bo ${i}`,
        description: 'Academia de judo do Sensei Zé',
        phone: '4935669090',
        latitude: -27.2040557,
        longitude: -51.0512441,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Pedro',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Academia do Pedro Bo 21' }),
      expect.objectContaining({ title: 'Academia do Pedro Bo 22' }),
    ])
  })
})
