import { IRoute } from '~/interfaces'
import { Home } from '~/pages/Home'
import { Login } from '~/pages/Login'

export default [
  {
    path: '/',
    element: Home,
    // isPrivate: true,
  },
  {
    path: '/login',
    element: Login,
  },
] as IRoute[]
