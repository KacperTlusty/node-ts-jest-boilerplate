import { localServer } from './index'

describe('example test', () => {
  test('should export server', () => {
    expect(localServer).not.toBeNull()
  })
})
