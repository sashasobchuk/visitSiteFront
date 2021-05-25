import {sendMeessageLogin} from "../api/accesApi";
const defaultStatus = {

}
const messageLoginReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const sendMessage = (mail,message) => async () => {
    try {
        sendMeessageLogin(mail,message)
    } catch (e) {
        console.log('trouble in get back sendMeessageLogin ', e)
    }
}

export default messageLoginReducer
