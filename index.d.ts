declare module "the-noun-project-api" {
  export class NounProject {
    constructor(config: { key: string; secret: string });

    addBlacklistTerms(options: object): Promise<any>;
    addBlacklistId(options: object, type?: string): Promise<any>;
    getBlacklist(): Promise<any>;
    getIconUsage(options: object): Promise<any>;
    getUsage(): Promise<any>;
    getListTerms(options: object): Promise<any>;
    getListCollection(options: object): Promise<any>;
    getListCollectionById(collectionId: number, options: object): Promise<any>;
    getIconsByTerm(options: object): Promise<any>;
    downloadIconById(iconId: number, options: object): Promise<any>;
    getIconById(id: number, options: object): Promise<any>;
    getIconSvgById(id: number, options: object): Promise<any>;
  }
}
