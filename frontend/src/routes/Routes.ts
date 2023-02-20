import { IRoute } from '~/interfaces'
import { Home } from '~/pages/Home'
import { Login } from '~/pages/Login'
import { Register } from '~/pages/Register'

export default [
  {
    path: '/',
    element: Home,
    isPrivate: true,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/register',
    element: Register,
  },
] as IRoute[]
