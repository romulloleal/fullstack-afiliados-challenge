import React from 'react'

import { Navigate } from 'react-router-dom'

interface RouteParams {
  isPrivate?: boolean
  component: React.FC
}

const RouteComponent: React.FC<RouteParams> = ({
  isPrivate,
  component: Component,
}) => {
  if (isPrivate) return <Navigate to='/login' />

  return <Component />
}

export default RouteComponent
