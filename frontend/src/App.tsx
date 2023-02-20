import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, Flip } from 'react-toastify'

import AxiosInterceptor from '~/services/api'

import { GlobalStyle } from './global'
import AuthProvider from './providers/Auth'
import { Routes } from './routes'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
      <AuthProvider>
        <AxiosInterceptor>
          <Routes />
        </AxiosInterceptor>
      </AuthProvider>
    </BrowserRouter>
  )
}
