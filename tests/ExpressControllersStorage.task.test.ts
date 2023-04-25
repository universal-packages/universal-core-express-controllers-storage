import { Logger } from '@universal-packages/logger'
import { populateTemplates } from '@universal-packages/template-populator'
import ExpressControllersStorageTask from '../src/ExpressControllersStorage.universal-core-task'

jest.mock('@universal-packages/template-populator')

describe('ExpressControllersStorageTask', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })

    let task = new ExpressControllersStorageTask('init', [], {}, logger)
    await task.exec()
    expect(populateTemplates).toHaveBeenCalled()

    task = new ExpressControllersStorageTask('init', [], { ts: true }, logger)
    await task.exec()
    expect(populateTemplates).toHaveBeenCalled()
  })
})
