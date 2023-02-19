import { Navigate, Route, Routes as Router } from 'react-router-dom'

import { IRoute } from '~/interfaces'

import RouteComponent from './RouteComponent'
import routes from './Routes'

export const Routes = () => {
  return (
    <Router>
      {routes.map((route: IRoute) => (
        <Route
          path={route.path}
          element={
            <RouteComponent
              isPrivate={route.isPrivate}
              component={route.element}
            />
          }
          key={route.path}
        />
      ))}

      <Route path='*' element={<Navigate to='/' />} />
    </Router>
  )
}
