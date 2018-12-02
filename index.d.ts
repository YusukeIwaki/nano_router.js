declare class Router<T> {
    constructor();
    on(
        pattern: string|RegExp|((key: string) => any),
        handler: (...args: any[]) => T
    ): this;

    onNoMatch(
        handler: (...args: any[]) => T
    ): this;

    handle(key: string, ...args: any[]): T
}

declare module "nano_router.js" {
    export = Router
}