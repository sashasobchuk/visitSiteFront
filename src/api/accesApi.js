import * as axios from "axios";
import {hostUrl} from "../config"



export const sendMeessageLogin = async (mail,message) => {
    debugger
    try {
        return await axios.post(`${hostUrl}foto/sendMail`,{
            mail:mail,
            message:message
        },{})

    } catch (e) {
        alert('proplemin download fotos', e)
    }
}