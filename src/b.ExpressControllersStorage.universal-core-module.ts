import { CoreModule } from '@universal-packages/core'
import { ExpressControllersStorageOptions, initialize } from '@universal-packages/express-controllers-storage'

export default class ExpressControllersStorageModule extends CoreModule<ExpressControllersStorageOptions> {
  public static readonly moduleName = 'express-controllers-storage'
  public static readonly description = 'Express Controllers Storage core module wrapper'
  public static readonly defaultConfig: ExpressControllersStorageOptions = { dynamicsLocation: './src' }

  public async prepare(): Promise<void> {
    await initialize(this.config, core.coreModules.storageModule.subject)
  }

  public async release(): Promise<void> {}
}
