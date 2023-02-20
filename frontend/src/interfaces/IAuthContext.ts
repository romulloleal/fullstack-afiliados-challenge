import { IAuthState } from './IAuthState'

export interface IAuthContext extends IAuthState {
  signUp: (name: string, email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  refreshAccessToken: () => Promise<string>
}
