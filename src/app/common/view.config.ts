import { DatatableAction } from "./constants";

export interface ViewConfig {
    columnDef: string,
    header: string,
    actions?: DatatableAction[]
}