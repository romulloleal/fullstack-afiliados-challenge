import { ToastContainer, Flip } from 'react-toastify'

import { GlobalStyle } from '~/global'
import AuthProvider from '~/providers/Auth'
import AxiosInterceptor from '~/services/api'

import 'react-toastify/dist/ReactToastify.css'

export const Providers = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <AuthProvider>
        <AxiosInterceptor>{children}</AxiosInterceptor>
      </AuthProvider>
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
    </>
  )
}
