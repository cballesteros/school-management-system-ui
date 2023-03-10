import { ViewConfig } from "src/app/common/view.config";

export const LevelViewConfig: ViewConfig[] = [
    {
        columnDef: 'name',
        header: 'Nombre'
    },
    {
        columnDef: 'description',
        header: 'Descripción'
    },
    {
        columnDef: 'actions',
        header: 'Acciones',
        actions: [
            {icon: 'visibility', type: 'view', columnId: 'id'},
            {icon: 'edit', type: 'edit', columnId: 'id'},
            {icon: 'delete', type: 'delete', columnId: 'id'},
        ]
    },
]
