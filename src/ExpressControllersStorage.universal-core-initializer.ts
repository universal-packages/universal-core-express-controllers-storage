import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class ExpressControllersStorageInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-storage'
  public static readonly description: string = 'Express Controllers Storage initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
