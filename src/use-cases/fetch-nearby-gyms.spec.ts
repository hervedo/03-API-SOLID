import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: 'Academia de judo do Sensei Zé',
      phone: '4935669090',
      latitude: -27.0040557,
      longitude: -51.1351244,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: 'Academia de judo do Sensei Zé',
      phone: '4935669090',
      latitude: -22.2040557,
      longitude: -49.0512441,
    })

    const { gyms } = await sut.execute({
      userLatitude: -27.0079921,
      userLongitude: -51.1491898,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
