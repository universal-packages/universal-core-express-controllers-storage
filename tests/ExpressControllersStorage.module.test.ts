import { Logger } from '@universal-packages/logger'

import { ExpressControllersStorageModule } from '../src'

describe('ExpressControllersStorageModule', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })
    const module = new ExpressControllersStorageModule({ dynamicsLocation: './src', secret: 'default' } as any, logger)

    global['core'] = { coreModules: { storageModule: { subject: {} } } } as any

    await module.prepare()
    await module.release()
  })
})
