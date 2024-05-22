import { YMaps, Map, GeolocationControl, Placemark, FullscreenControl, TypeSelector, Clusterer } from '@pbe/react-yandex-maps';
import {Router, Routes, Route} from "react-router-dom";

import Login from "./components/Login";
import Menu from "./components/Menu";
import AddPoint from "./components/AddPoint";
import AdminControl from "./components/AdminControl";

import {useAuth} from "./hooks/useAuth";

import { useEffect, useState } from 'react';
function App() {
  const {isAuthenticated, login, logout} = useAuth();
  const [userData, setUserData] = useState({username: "", password: "", places: []});
  const placemarks = [[ [53.907668], [27.585951]], [[57.907668], [28.585951]]];

  useEffect(()=>{
    const {username, password, places} = userData;

    if(username.trim() != "" && password.trim() != "") login(username, password);
  }, [userData]);

  return (
    <>
    <Router>
    <Menu />
    <Routes>
      <Route path="/"/>

      {(isAuthenticated)? <Route path="/login" exact element={<><button onClick = {logout}>Log out</button></>}/> : 
      <Route path="/login" exact element={<Login setUserData={setUserData}/>}/>}
      <Route path="/register" exact element={null}/>
      <Route path="/addpoint" exact element={<AddPoint setUserData={setUserData}/>}/> 
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
