import Item from "./OneItem/Item";
import './Concerts.css'
import AddItem from "./Change/AddItem";
import {useDispatch, useSelector} from "react-redux";
import {getConcertPage} from "../../redux/concertPageReducer";
import {useEffect} from "react";


const Concerts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getConcertPage())
    }, [])
    const isAuth = useSelector(state => state.header.isAuth)
    const items = useSelector(state => state.concertPage.items)

    return <div>

        <div className="AllItems">
            {items.map((item) =>
                <Item  key={item._id} item={item}/>
            )}
            {isAuth && <AddItem/>}

        </div>

    </div>
}

export default Concerts







