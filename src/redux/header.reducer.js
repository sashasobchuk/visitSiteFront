import {authApi, LoginApi} from "../api/fotoApi";

const CLOSE_LOGIN = 'CLOSE_LOGIN'
const SHOW_LOGIN = 'SHOW_LOGIN'
const IS_AUTH_TO_TRUE = 'IS_AUTH_TO_TRUE'
const IS_AUTH_TO_FALSE = 'IS_AUTH_TO_FALSE'

const defaultStatus = {
    isAuth: false,
    LoginDisplay: 'none',

}
const HeaderReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case CLOSE_LOGIN:
            return {...state, LoginDisplay: 'none'}
        case SHOW_LOGIN:
            return {...state, LoginDisplay: 'flex'}
        case IS_AUTH_TO_TRUE:
            return {...state, isAuth: true}
        case IS_AUTH_TO_FALSE:
            return {...state, isAuth: false}
        default:
            return state
    }
}
export const closeLogin = () => ({type: CLOSE_LOGIN})
export const showLogin = () => ({type: SHOW_LOGIN})
export const isAuthToTrue = () => ({type: IS_AUTH_TO_TRUE})
export const isAuthToFalse = () => ({type: IS_AUTH_TO_FALSE})

export const Login_T = (login, password) => async (dispatch) => {

    try {

        const response = await LoginApi(login, password)
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            dispatch(isAuthToTrue())
            dispatch(closeLogin())
        }
    } catch (e) {
        console.log('trouble in login', e)
    }

}
export const logAut = () => async (dispatch) => {

    try {
        localStorage.removeItem('token')
        dispatch(closeLogin())
        dispatch(isAuthToFalse())
    } catch (e) {
        console.log('trouble in login', e)
    }

}
export const auth = () => async (dispatch) => {

    try {

        const response = await authApi()
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            dispatch(isAuthToTrue())
        }

    } catch (e) {
        localStorage.removeItem('token')
        console.log('trouble in get auth', e)
    }

}

export default HeaderReducer
