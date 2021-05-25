import {downloadFotoItems, downloadVideoItems} from "../api/mainPageApi";


const SET_FOTO_ITEMS = 'SET_FOTO_ITEMS'
const SET_VIDEO_ITEMS = 'SET_VIDEO_ITEMS'

const defaultStatus = {
    fotoItems: [{image_Url_Name:null,_id:'standard'}],
    videoItems: [{video_Url_Name:null,_id:'standard'}],

}
const MainPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case SET_FOTO_ITEMS:
            return {...state, fotoItems: action.fotoResponse}
        case SET_VIDEO_ITEMS:
            return {...state, videoItems: action.videoResponse}

        default:
            return state
    }
}
export const setFotoItems = (fotoResponse) => ({type: SET_FOTO_ITEMS, fotoResponse})
export const setVideoItems = (videoResponse) => ({type: SET_VIDEO_ITEMS, videoResponse})


export const DownLoAdMainPage = () => async (dispatch) => {
    try {
        const fotoResponse = await downloadFotoItems()
        if (fotoResponse.status === 200) {
            dispatch(setFotoItems(fotoResponse.data.fotoPage))
        }
        const videoResponse = await downloadVideoItems()
        if (videoResponse.status === 200) {
            dispatch(setVideoItems(videoResponse.data.videoPage))
        }
    } catch (e) {
        console.log('trouble DownLoAdMainPage', e)
    }
}

export default MainPageReducer
