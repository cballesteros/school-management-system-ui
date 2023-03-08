export interface DrawerMenu {
  icon: string
  path: string
  label: string
}

export interface SelectValue {
  value: string
  viewValue: string,
  selected?: boolean
}

export interface DatatableAction {
  icon: string
  type: string
  columnId: string
  data?: any
}

export const SMSUI = {
    TOKEN_KEY: 'sms_token',
    API_URL: 'http://localhost:8080/api/v1'
}

export const MENU_ITEMS: DrawerMenu[] = [
    {
        icon: 'home',
        path: 'home',
        label: 'Inicio'
      },
      {
        icon: 'group',
        path: 'users',
        label: 'Usuarios'
      },
      {
        icon: 'library_books',
        path: 'home',
        label: 'Cursos'
      },
]

export const ID_TYPES_SELECT: SelectValue[] = [
  {
    value: 'CC',
    viewValue: 'Cédula de Ciudadanía'
  },
  {
    value: 'TI',
    viewValue: 'Tarjeta de Identidad'
  },
  {
    value: 'CE',
    viewValue: 'Cédula de Extranjería'
  }
]

export const USER_TYPES_SELECT: SelectValue[] = [
  {
    value: 'ADMINISTRATOR',
    viewValue: 'Administrador'
  },
  {
    value: 'TEACHER',
    viewValue: 'Profesor'
  },
  {
    value: 'STUDENT',
    viewValue: 'Estudiante'
  },
  {
    value: 'ATTENDANT',
    viewValue: 'Acudiente'
  }
]
