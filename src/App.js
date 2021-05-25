import './app.css';
import React from "react";



import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Redirect, HashRouter} from "react-router-dom";
import Concerts from "./Components/Concerts/Concerts";
import Contacts from "./Components/Contacts/Contacts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./redux/header.reducer";
import background from "./acces/foto.jpg"

const Foto = React.lazy(()=>import("./Components/Foto/Foto"))
const Video = React.lazy(()=>import("./Components/Video/Video"))

//const Dialogs = React.lazy(() => import(`./components/Dialogs/dialogs`));


const App = () => {
    /*  заисуємо Id користувача */
    !localStorage.getItem('userId' ) &&  localStorage.setItem('userId',Math.random().toString(17.2))
    const isAuth = useSelector(state=>state.header.isAuth)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(auth())
    },[isAuth])

    return <div className='all'>
        <div >
            <div className='all__background'>
                <img  src={background} alt=""/>
            </div>
            <HashRouter basename={process.env.PUBLIC_URL}>
              <div className='all__header'>
                  <div>
                      <Header />
                  </div>
              </div >
              <div className='all__body'>
                  <Route path="/Main" render={() => <Main />} />
                  <Route exact path='/' render={() => <Redirect to={'/Main'}/>}/>
                  <Route path="/Concerts" render={() => <Concerts />} />
                  <Route path="/Contacts" render={() => <Contacts />} />

                  <Route path="/Foto" render={() =>{
                      return <React.Suspense fallback={<div> foto is downloading</div>}>
                          <Foto/>
                      </React.Suspense>
                  }} />
                  <Route path="/Video" render={() =>{
                      return <React.Suspense fallback={<div> video is downloading</div>}>
                          <Video/>
                      </React.Suspense>
                  }} />

              </div>
                  <div className='all__footer'>
                      <div>
                          <Footer />
                      </div>
                  </div>
          </HashRouter>
        </div>
    </div>
}

export default App
