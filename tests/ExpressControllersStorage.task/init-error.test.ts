import ExpressControllersStorageTask from '../__fixtures__/ExpressControllersStorage.task'

describe(ExpressControllersStorageTask, (): void => {
  it('throws an error if directive is not recognized', async (): Promise<void> => {
    await expect(
      jestCore.execTask('express-controllers-storage-task', {
        directive: 'nop',

        args: { f: true },
        coreConfigOverride: {
          config: { location: './tests/__fixtures__/config' },
          modules: { location: './tests/__fixtures__' },
          tasks: { location: './tests/__fixtures__' },
          logger: { silence: true }
        }
      })
    ).rejects.toThrow('Unrecognized directive nop')
  })
})
