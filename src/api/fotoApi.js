import * as axios from "axios";
import {hostUrl} from "../config"



export const getFotoPageApi = async () => {
     try {
        return await axios.get(`${hostUrl}foto/fotoPage`,{})

    } catch (e) {
         alert('proplemin getFotoPageApi', e)
    }
}
export const uploadNewItem = async (foto) => {
     try {
        const formData = new FormData()
         formData.append('foto',foto)
        return await axios.post(`${hostUrl}foto/fotoUpload`,formData,
         {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )

    } catch (e) {
         alert('problem in uploadNewItem', e)
    }
}
export const addCommentAPI = async (text,itemId,userId) => {
     try {
        return await axios.post(`${hostUrl}foto/addComment`, {
             comment:text,
             fotoItemId:itemId,
             userId:userId

        },{})

    } catch (e) {
         alert('problem in addCommentAPI', e)
    }
}
export const AdmindeleteCommentAPI = async (commentId) => {
     try {
        return await axios.delete(`${hostUrl}foto/adminDeleteComment?commentID=${commentId}`,{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    } catch (e) {
         console.log('problem in deleteCommentAPI', e)
    }
}
export const deleteCommentAPI = async (commentId,userId) => {
     try {
        return await axios.delete(`${hostUrl}foto/DeleteComment?commentID=${commentId}&userId=${userId}`,{})
    } catch (e) {
         console.log('problem in deleteCommentAPI', e)
    }
}
export const deleteItemAPI = async (ItemId) => {
     try {
         return await axios.delete(`${hostUrl}foto/deleteFoto?fotoItemId=${ItemId}`, {
                 headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
             }
         )
     }
     catch (e) {
         alert('problem in  deleteItemAPI', e)
    }
}
export const LoginApi = async (email,password) => {
     try {
         return await axios.post(`${hostUrl}auth/login`,{
             email,
             password
         },{})
        // return await axios.delete(`${hostUrl}foto/deleteComment?commentID=${commentId}`,{})

    } catch (e) {
         alert('problem in LoginApi ', e)
    }
}
export const authApi = async () => {
     try {

         return await axios.get(`${hostUrl}auth/auth`,{headers:{
             authorization:`Bearer ${localStorage.getItem('token')}`
             }})
    } catch (e) {
         console.log('problem in authApi', e)
    }
}
