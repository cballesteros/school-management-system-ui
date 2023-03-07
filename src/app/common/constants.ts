import { DrawerMenu } from "../app.component"

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