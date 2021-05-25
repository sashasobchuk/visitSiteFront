import * as axios from "axios";
import {hostUrl} from "../config"



export const getVideoPageApi = async () => {
    try {
        return await axios.get(`${hostUrl}video/getVideoPage`,{})

    } catch (e) {
        alert('proplemin getVideoPageApi', e)
    }
}
export const uploadNewItem = async (video) => {
    try {
        const formData = new FormData()
        formData.append('video',video)
        return await axios.post(`${hostUrl}video/videoUpload`,formData,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )

    } catch (e) {
        alert('problem uploadNewItem', e)
    }
}

export const addCommentAPI = async (text,itemId,userId) => {
    try {
        return await axios.post(`${hostUrl}video/addComment`, {
            comment:text,
            VideoItemId:itemId,
            userId:userId
        },{})

    } catch (e) {
        alert('problem addCommentAPI', e)
    }
}
export const deleteCommentAPI = async (commentId,userId) => {
    try {
        return await axios.delete(`${hostUrl}video/deleteComment?commentID=${commentId}&userId=${userId}`,{
    })
    } catch (e) {
        alert('problem ideleteCommentAPI', e)
    }
}
export const adminDeleteCommentAPI = async (commentId) => {
    try {
        return await axios.delete(`${hostUrl}video/AdminDeleteComment?commentID=${commentId}`,{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}

    })
    } catch (e) {
        alert('problem ideleteCommentAPI', e)
    }
}
export const deleteItemAPI = async (ItemId) => {
    try {

        return await axios.delete(`${hostUrl}video/deleteVideoItem?videoItemId=${ItemId}&`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }
        )
    }
    catch (e) {
        alert('problem in  deleteItemAPI', e)
    }
}


