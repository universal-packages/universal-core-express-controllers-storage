import { populateTemplates } from '@universal-packages/template-populator'

import ExpressControllersStorageTask from '../__fixtures__/ExpressControllersStorage.task'

jest.mock('@universal-packages/template-populator')

describe(ExpressControllersStorageTask, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    await jestCore.execTask('express-controllers-storage-task', {
      directive: 'init',

      args: { f: true },
      coreConfigOverride: {
        config: { location: './tests/__fixtures__/config' },
        modules: { location: './tests/__fixtures__' },
        tasks: { location: './tests/__fixtures__' },
        logger: { silence: true }
      }
    })

    expect(populateTemplates).toHaveBeenCalledWith(expect.stringMatching(/universal-core-express-controllers-storage\/src\/template/), './src', { override: true })
  })
})
