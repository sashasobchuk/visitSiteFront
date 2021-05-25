import * as axios from "axios";
import {hostUrl} from "../config"



export const downloadFotoItems = async () => {

    try {
        return await axios.get(`${hostUrl}getFotoItems`,{
        })

    } catch (e) {
        alert('proplemin downloadFotoItems', e)
    }
}

export const downloadVideoItems = async () => {

    try {
        return await axios.get(`${hostUrl}getVideoItems`,{
        })

    } catch (e) {
        alert('proplemin downloadFotoItems', e)
    }
}



