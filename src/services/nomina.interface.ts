export interface INominaService {
    seed(data: any): any;

    get<T>(): Promise<T>;

    getQuery<T>(query: string): Promise<T>;
}