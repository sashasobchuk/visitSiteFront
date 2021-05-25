import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import fotoPageReducer from "./fotoPageReducer";
import HeaderReducer from "./header.reducer";
import videoPageReducer from "./videoPageReducer";
import concertPageReducer from "./concertPageReducer";
import MainPageReducer from "./MainPageReducer";

const rootReducer = combineReducers({

    fotoPage:fotoPageReducer,
    header:HeaderReducer,
    videoPage:videoPageReducer,
    concertPage:concertPageReducer,
    MainPage:MainPageReducer,

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )