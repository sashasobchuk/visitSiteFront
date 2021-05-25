import * as axios from "axios";
import {hostUrl} from "../config"



export const getConcertPageApi = async () => {

    try {
        return await axios.get(`${hostUrl}concerts/getPage`,{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

    } catch (e) {
        alert('proplemin getConcertPageApi', e)
    }
}
export const AddCItemAPI = async (date,citi,status,isDone) => {
    try {
        return await axios.post(`${hostUrl}concerts/addItem`,{
                date:date,
                citi:citi,
                status:status,
                isDone:isDone
            },
            { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}

        )

    } catch (e) {
        alert('proplemin AddCItemAPI', e)
    }
}

export const deleteCItemAPI = async (_id) => {
    try {
        return await axios.delete(`${hostUrl}concerts/deleteConcertItems?concertItemId=${_id}`,
            { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
    } catch (e) {
        alert('proplemin deleteCItemAPI', e)
    }
}
export const ChangeCItemAPI = async (date=null,citi=null,status=null,isDone=null) => {

    try {
        return await axios.post(`${hostUrl}concerts/changeItem`,{
                date:date,
                citi:citi,
                status:status,
                isDone:isDone
            },
            { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
    } catch (e) {
        alert('proplemin deleteCItemAPI', e)
    }
}




