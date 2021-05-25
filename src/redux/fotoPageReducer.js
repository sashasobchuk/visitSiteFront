import image1 from "../acces/forFoto/1.png"

import {
    addCommentAPI,
    AdmindeleteCommentAPI,
    deleteCommentAPI,
    deleteItemAPI,
    getFotoPageApi,
    uploadNewItem
} from "../api/fotoApi";

const ADD_COMMENT = 'ADD_COMMENT'
const SET_FOTO_PAGE = 'SET_FOTO_PAGE'
const DELETE_COMMENT = 'DELETE_COMMENT'
const SHOWE_POPUP = 'SHOWE_POPUP'
const CLOSE_POPUP = 'CLOSE_POPUP'
const SHOVE_FULL_FOTO_ITEM = 'SHOVE_FULL_FOTO_ITEM'
const HIDE_FULL_FOTO_ITEM = 'HIDE_FULL_FOTO_ITEM'




const defaultStatus = {
    popupDisplay:'none',
    FullFotoItemImgSrc:'',
    FullFotoItemDisplay:'none',
    item:{ fotoComments:[]},
    fotoItems: [
        {
            _id: 'standard',
            tittle: '2name of foto',
            image_Url_Name: image1,
            likes:0,
            fotoComments: [
                {_id: 'm1', value: 'hello comment',date: 0,fotoItems: '',likes:0,userId: '',},
                {_id: 'm2', value: 'hello comment2',date: 0,fotoItems: '',likes:0,userId: '',},
            ]
        },
    ],
}
const fotoPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                /** вертаєм стейт , в якому для кожного фотоітема йде перевірка,
                якщо ід те шо в нас співпадає змінюємо додаючи в кінецю фотокоментів наш фотокомент*/
                fotoItems: [...state.fotoItems.map(item => (item._id !== action.Item_id
                        ? item
                        : {
                        _id: item._id,
                        tittle: item.tittle,
                        image_Url_Name: item.image_Url_Name,
                        likes:item.likes,

                        fotoComments: [...item.fotoComments.push(action.fotoComment)],
                        // fotoComments: [item.fotoComments.push(action.fotoComment)],
                        //     fotoComments: [...item.fotoComments, action.fotoComment],

                        }
                ))],
                /** добавляєм фотоітем в FullfotoItem*/
                 item: {...state.item , fotoComments: [...state.item.fotoComments, action.fotoComment]}
            }
        case DELETE_COMMENT:
            return {
                ...state,
                fotoItems: [...state.fotoItems.map(item => (
                    {...item, fotoComments:[...item.fotoComments.filter(comment => comment._id !== action.deletedId)]
                    })
                )],
                /** видаляєм з full FullfotoItem*/
                item:{...state.item, fotoComments:
                        [...state.item.fotoComments.filter(commentItem => commentItem._id !== action.deletedId)]
                }
            }
        case SHOWE_POPUP:return {...state,popupDisplay:'flex'}
        case CLOSE_POPUP:return {...state,popupDisplay:action.display}
        case SHOVE_FULL_FOTO_ITEM:return {...state,FullFotoItemImgSrc:action.src,FullFotoItemDisplay:'flex',item:action.item }
        case HIDE_FULL_FOTO_ITEM:return {...state,FullFotoItemDisplay:'none',item:{fotoComments:[]}}
        case SET_FOTO_PAGE:return {...state, fotoItems: action.fotoPage}
        default:
            return state
    }
}
export const setFotoPage = (fotoPage) => ({type: SET_FOTO_PAGE, fotoPage})

export const addComment = (fotoComment, Item_id) => ({type: ADD_COMMENT, fotoComment, Item_id})
export const deleteComment = (deletedId) => ({type: DELETE_COMMENT, deletedId})

export const showePopUp = (display) => ({type: SHOWE_POPUP, display})
export const closePopUp = (display) => ({type: CLOSE_POPUP, display})

export const shoveFullFotoItemImgSrc = (src,item) => ({type: SHOVE_FULL_FOTO_ITEM, src,item})
export const hideFullFotoItemImgSrc = () => ({type: HIDE_FULL_FOTO_ITEM, })

export const DownloadFotoPage = () => async (dispatch) => {
    let response = await getFotoPageApi()
    await dispatch(setFotoPage(response.data.fotoPage))
}
export const addComment_T = (text, itemId) => async (dispatch) => {
    try {
        if (text) {
            const userId = localStorage.getItem('userId')
            /* перрірка що text не null undefined or '' */
            let response = await addCommentAPI(text, itemId,userId)
            if (response.status === 200) {
                dispatch(addComment(response.data.fotoComment, itemId))
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
        const userId = localStorage.getItem('userId')
        let Admin =  localStorage.getItem('token')

        if (commentId ) {
            /** перірка що commentId не null undefined or '' */
            let response = (Admin ? await AdmindeleteCommentAPI(commentId): await deleteCommentAPI(commentId,userId))
            if (response.status === 200) {
                dispatch(deleteComment(commentId))
            }else if( response.status === 401 ){
                console.log('permision denied')
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
            /* перірка що commentId не null undefined or '' */
            let response = await deleteItemAPI(ItemId)
            if (response.status === 200) {
                dispatch(DownloadFotoPage())
            }
        } else {
            console.log('trouble in get back uploaded comment')
            return undefined
        }
    } catch (e) {
        console.log('trouble in get back uploaded comment2', e)
    }

}


export const MakeNewItem = (foto) => async (dispatch) => {
     await uploadNewItem(foto)
    dispatch(DownloadFotoPage())

}
export default fotoPageReducer

















// export const setFotos = (fotos) => ({type: SET_FOTO_PAGE, fotos})

/*export const DownloadFoto =  () =>  async (dispatch) => {

    let response = await getFotoPageApi()
    await dispatch(setFotos(response.data.fotoPage))
}*/


/*export const setFiles = (files) => ({type: SET_FILES, payload: files})
export const setCurrentDir = (dir) => ({type: SET_CURRENT_DIT, payload: dir})
export const addFiles = (file) => ({type: ADD_FILE, payload: file})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const pushToStack = (dir) => ({type: PUSH_TO_STACK, payload: dir})
export const deleteFileAction = (dirId) => ({type: DELETE_FILE, payload: dirId})
export const setView = (view) => ({type: SET_VIEW, payload: view})*/
// export const removeFromStack = (display) => ({type: REMOVE_FROM_STACK, payload: display})


/*        case SET_FILES:return {...state, files: action.payload}

        case SET_CURRENT_DIT:return {...state, currentDir: action.payload}
        case ADD_FILE:return {...state, files:[...state.files, action.payload]}
        case SET_POPUP_DISPLAY:return {...state,popupDisplay:action.payload}
        case DELETE_FILE:return {...state,files:[...state.files.filter(file=>file._id !== action.payload)]}

        case PUSH_TO_STACK:return {...state,dirStack:[...state.dirStack,action.payload]}
        case SET_VIEW:return {...state,view: action.payload}*/
// case REMOVE_FROM_STACK:return {...state,popupDisplay:action.payload}
