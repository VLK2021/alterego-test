import {INew} from "./INew";

export interface IInitialstate {
    newsArr:  INew[],
    status: any,
    error:  null | string,
    page: number,
}