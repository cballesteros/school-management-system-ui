import { USER_TYPES_SELECT } from "../../../app/common/constants";
import { FilterConfig } from "../../../app/common/filter.config.model";

export const USER_FILTER_CONFIG: FilterConfig[] = [
    {
        type: 'select',
        label: 'Tipo de usuarios',
        options: USER_TYPES_SELECT
    },
    {
        type: 'input-search',
        label: 'Buscar',
    }
]