/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const AxiosInterceptor = ({ children }: any) => {
  useMemo(() => {
    api.interceptors.request.use(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (config: any) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    api.interceptors.response.use(
      async (response) => {
        const { message } = response.data
        if (message) {
          toast.success(message)
        }
        return response
      },
      async (error) => {
        const { message } = error.response.data
        if (
          ![
            'userUnauthorized',
            'expiredAccessToken',
            'expiredRefreshToken',
          ].includes(message)
        ) {
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }, [])
  return children
}

export default AxiosInterceptor
