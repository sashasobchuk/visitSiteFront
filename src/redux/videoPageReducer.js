import video1 from "../acces/foto.jpg"
import {
    addCommentAPI,
    adminDeleteCommentAPI,
    deleteCommentAPI,
    deleteItemAPI,
    getVideoPageApi,
    uploadNewItem
} from "../api/videoApi";

const SET_VIDEO_PAGE = 'SET_VIDEO_PAGE'

const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const SHOWE_POPUP = 'SHOWE_POPUP'
const CLOSE_POPUP = 'CLOSE_POPUP'
const SHOVE_FULL_video_ITEM = 'SHOVE_FULL_video_ITEM'
const HIDE_FULL_video_ITEM = 'HIDE_FULL_video_ITEM'
const userId = localStorage.getItem('userId')
let Admin =  localStorage.getItem('token')


const defaultStatus = {
    popupDisplay:'none',
    FullvideoItemImgSrc:'',
    FullvideoItemDisplay:'none',
    item:{ VideoComments:[]},
    videoItems: [
        {
            _id: 'standard',
            tittle: '2name of video',
            video_Url_Name: video1,
            VideoComments: [
                {_id: 'm1', value: 'hello comment'},
                {_id: 'm2', value: '2hello comment'},
            ]
        },
    ],
}
const videoPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                /** вертаєм стейт , в якому для кожного фотоітема йде перевірка,
                якщо ід те шо в нас співпадає змінюємо додаючи в кінецю фотокоментів наш фотокомент*/
                videoItems: [...state.videoItems.map(item => (item._id !== action.Item_id
                        ? item :
                        {...item, VideoComments: [...item.VideoComments.push(action.videoComment)]}
                ))],
                /** добавляєм фотоітем в FullvideoItem*/
                item: {...state.item , VideoComments: [...state.item.VideoComments, action.videoComment]}
            }
        case DELETE_COMMENT:
            return {
                ...state,
                videoItems: [...state.videoItems.map(item => (
                        item={
                            _id: item._id,
                            tittle: item.tittle,
                            video_Url_Name: item.video_Url_Name,
                            VideoComments:item.VideoComments.filter(commentItem => commentItem._id !== action.deletedId)
                        }
                    )
                )],
                /** видаляєм з full FullvideoItem*/
                item:{...state.item, VideoComments:
                        [...state.item.VideoComments.filter(commentItem => commentItem._id !== action.deletedId)]
                }

            }
        case SHOWE_POPUP:return {...state,popupDisplay:'flex'}
        case CLOSE_POPUP:return {...state,popupDisplay:action.display}
        case SHOVE_FULL_video_ITEM:return {...state,FullvideoItemImgSrc:action.src,FullvideoItemDisplay:'flex',item:action.item }
        case HIDE_FULL_video_ITEM:return {...state,FullvideoItemDisplay:'none',item:{videoComments:[]}}
        case SET_VIDEO_PAGE:

            return {...state, videoItems: action.videoItems}
        default:
            return state
    }
}
export const setVideoPage = (videoItems) => ({type: SET_VIDEO_PAGE, videoItems})

export const addComment = (videoComment, Item_id) => ({type: ADD_COMMENT, videoComment, Item_id})
export const deleteComment = (deletedId) => ({type: DELETE_COMMENT, deletedId})

export const showePopUp = (display) => ({type: SHOWE_POPUP, display})
export const closePopUp = (display) => ({type: CLOSE_POPUP, display})


export const DownloadVideoPage = () => async (dispatch) => {
    let response = await getVideoPageApi()
    await dispatch(setVideoPage(response.data.videoPage))
}
export const addComment_T = (text, itemId) => async (dispatch) => {
    try {
        if (text) {
            /* перрірка що text не null undefined or '' */
            let response = await addCommentAPI(text, itemId,userId)
            if (response.status === 200) {
                dispatch(addComment(response.data.videoComment, itemId))
            }
        } else {
            console.log('trouble in get back uploaded comment')
            return undefined
        }
    } catch (e) {
        console.log('trouble in get back uploaded comment2', e)
    }

}
export const DeleteComment_T = (commentId) => async (dispatch) => {

    try {
        if (commentId) {
            /* перірка що commentId не null undefined or '' */
            let response = (Admin ? await adminDeleteCommentAPI(commentId): await deleteCommentAPI(commentId,userId))
            // let response = await deleteCommentAPI(commentId)
            if (response.status === 200) {
                dispatch(deleteComment(commentId))
            }
        } else {
            console.log('trouble in get back uploaded comment')
            return undefined
        }
    } catch (e) {
        console.log('trouble in get back uploaded comment2', e)
    }

}
export const DeleteItem_T = (ItemId) => async (dispatch) => {

    try {
        if (ItemId) {
            /** перірка що commentId не null undefined or '' */
            let response = await deleteItemAPI(ItemId)
            if (response.status === 200) {
                dispatch(DownloadVideoPage())
            }
        } else {
            console.log('trouble in get back uploaded comment')
            return undefined
        }
    } catch (e) {
        console.log('trouble in get back uploaded comment2', e)
    }

}


export const MakeNewItem = (video) => async (dispatch) => {
     await uploadNewItem(video)
    dispatch(DownloadVideoPage())

}
export default videoPageReducer

