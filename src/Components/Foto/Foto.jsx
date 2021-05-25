import  './foto.css'
import FotoItem from "./fotoItem";
import {useDispatch, useSelector} from "react-redux";
import AddFotoItem from "./AddFotoItem";
import { DownloadFotoPage} from "../../redux/fotoPageReducer";
import React, {useEffect} from "react";
import PopUp from "../popUp/PopUp";
import FullFotoItem from "./fullFotoItem/fullFotoItem";

const Foto = () => {

    const fotoItems = useSelector(state=> state.fotoPage.fotoItems)
    const dispatch = useDispatch()
    const isAuth =useSelector(state =>state.header.isAuth)
    useEffect(() => {dispatch(DownloadFotoPage())}, [fotoItems])

    return <div >
        <div className='fotoPage'>
            { fotoItems.map(item=>
                <FotoItem  key={item._id} item={item} />
            )}
            {isAuth && <AddFotoItem  />}
            <PopUp/>
            <FullFotoItem/>
        </div>

    </div>
}
export default Foto