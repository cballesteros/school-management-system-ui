import { ViewConfig } from '../../common/view.config';

export const UserViewConfig: ViewConfig[] = [
    {
        columnDef: 'idType',
        header: 'Tipo ID'
    },
    {
        columnDef: 'idNumber',
        header: 'Número de ID'
    },
    {
        columnDef: 'firstName',
        header: 'Nombre'
    },
    {
        columnDef: 'lastName',
        header: 'Apellido'
    },
    {
        columnDef: 'email',
        header: 'Correo'
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