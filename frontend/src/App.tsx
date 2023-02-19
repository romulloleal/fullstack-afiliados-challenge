import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'

import { Routes } from './routes'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  )
}
