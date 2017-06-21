import { LOGIN_USER } from '../constants'

export const loginUser = email => ({
    type: LOGIN_USER,
    payload: email
})