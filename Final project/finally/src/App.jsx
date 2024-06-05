import { YMaps, Map, GeolocationControl, Placemark, FullscreenControl, TypeSelector, Clusterer } from '@pbe/react-yandex-maps';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/Login";
import Menu from "./components/Menu";
import AddPoint from "./components/AddPoint";
import Register from './components/Register';
import usePlaces from './hooks/usePlaces';
import AdminControl from "./components/AdminControl";

import {useAuth} from "./hooks/useAuth";

import { useEffect, useState } from 'react';
function App() {
  const {isAuthenticated, login, logout} = useAuth();
  const {addPlace} = usePlaces();
  const [userData, setUserData] = useState({username: "", password: "", isNew: false});
  const [place, setPlace] = useState({name: "", coordinates: [[0], [0]], text: "", imgSrc: ""});
  const placemarks = [[ [53.907668], [27.585951]], [[57.907668], [28.585951]]];

  useEffect(()=>{
    const {username, password, isNew} = userData;
    console.log("Use effect:" + username + password + isNew);
    if(username.trim() != "" && password.trim() != "") login(username, password, isNew);
  }, [userData]);

  useEffect(()=>{
    const {name, coordinates, text, imgSrc} = place;
    if(name.trim() != "" && coordinates !== [[0],[0]] && text != "" && imgSrc != "") addPlace(name, coordinates, text, imgSrc);
  }, [place]);

  

  return (
    <>
    
  <Router>
    <Menu/>
    <Routes>
      <Route path ="/"/>

      {(isAuthenticated)? <Route path ="/login" element={<><button onClick = {logout}>Log out</button></>}/> : 
      <Route path ="/login"  element={<Login setUserData={setUserData}/>}/>}

      <Route path ="/register" element={<Register setUserData={setUserData}/>}/>
      {(isAuthenticated)? <Route path ="/addpoint"  element={<AddPoint setPlace={setPlace}/>}/> :
      <Route path ="/addpoint"  element={<p>Log in, please!</p>}/> }
      <Route path="*" element={<>Page not found</>}/>
    </Routes>
  </Router>

     <YMaps enterprise query={{apikey: '89cd12bf-209a-4bea-a680-816364016285'}}>
        <div className="map" >
          <Map 
           style={{width: '80vw', height: '80vh', border: '1px solid #c49208', marginLeft: '10vw'}} 
           defaultState={{ center: [53.907668, 27.585951], zoom: 9 }}>
              {placemarks.map((coordinates, index) => (
                <Placemark key={index} geometry={coordinates}/>
              ))}
              
            <FullscreenControl />
          </Map>
        </div>
      </YMaps>
    </>
  )
}
export default App
