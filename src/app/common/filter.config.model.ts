import { SelectValue } from "./constants"

export interface FilterConfig {
    type: 'input-search' | 'select'
    label: string
    options?: SelectValue[]
}
