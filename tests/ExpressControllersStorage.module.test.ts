import { initialize } from '@universal-packages/express-controllers-storage'
import { Storage } from '@universal-packages/storage'

import { ExpressControllersStorageModule } from '../src'

jest.mock('@universal-packages/express-controllers-storage')

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(ExpressControllersStorageModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(core.coreModules.expressControllersStorage).not.toBeUndefined()
    expect(core.coreModules.expressControllersStorage.config).toEqual({ dynamicsLocation: './src', routes: { retrieve: { enabled: true } } })
    expect(initialize).toHaveBeenCalledWith({ dynamicsLocation: './src', routes: { retrieve: { enabled: true } } }, expect.any(Storage))
  })
})
