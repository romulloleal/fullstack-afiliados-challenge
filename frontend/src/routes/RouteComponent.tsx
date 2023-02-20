import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth } from '~/providers/Auth'

interface RouteParams {
  isPrivate?: boolean
  component: React.FC
}

const RouteComponent: React.FC<RouteParams> = ({
  isPrivate,
  component: Component,
}) => {
  const { user } = useAuth()
  if (isPrivate && !user) return <Navigate to='/login' />

  return <Component />
}

export default RouteComponent
