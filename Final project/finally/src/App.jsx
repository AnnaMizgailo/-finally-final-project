import { YMaps, Map, GeolocationControl, Placemark, FullscreenControl, TypeSelector, Clusterer } from '@pbe/react-yandex-maps';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";


import Login from "./components/Login";
import Menu from "./components/Menu";
import AddPoint from "./components/AddPoint";
import Register from './components/Register';
import usePlaces from './hooks/usePlaces';
import AdminControl from "./components/AdminControl";

import {useAuth} from "./hooks/useAuth";
import { balloonTransform } from './hooks/balloonTransform';

const host = "http://localhost:3000";
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: host
});

import { useEffect, useState } from 'react';
function App() {


  const {isAuthenticated, login, logout} = useAuth();
  const {addPlace} = usePlaces();
  const [userData, setUserData] = useState({username: "", password: "", isNew: false});
  const [place, setPlace] = useState({name: "", coordinates: [[0], [0]], text: "", imgUrl: ""});
  const [isPlaceAdded, setIsPlaceAdded] = useState(0);
  const [balloonContent, setBalloonContent] = useState('check');
  const [places, setPlaces] = useState([
    {
      "name": "",
      "coordinates": [
        [
          0
        ],
        [
          0
        ]
      ],
      "imgUrl": "",
      "text": ""
    }
  ]);
  useEffect(()=>{
    const {username, password, isNew} = userData;
    if(username.trim() != "" && password.trim() != "") login(username, password, isNew);
  }, [userData]);

  useEffect(()=>{
    const {name, coordinates, text, imgUrl} = place;
    if(name.trim() != "" && text != "" && imgUrl != "") addPlace(name, coordinates, text, imgUrl);
    setIsPlaceAdded(isPlaceAdded+1);
  }, [place]);

  useEffect(()=>{
    async function returnListOfPlaces(){
      try{
        const response = await axiosInstance.get(
            `${host}/place/get-all`, 
        );
        setPlaces(response.data[0]);
        console.log("use effect response.data - ", response.data[0]);
        console.log("use effect places - ", places);
      } catch (error){
      console.error(error);
      }
    }
    returnListOfPlaces();
  }, [isPlaceAdded]);

  const handleApiAvaliable = (ymaps) => {
    let balloonTransformation = balloonTransform(places[0], ymaps);
    setBalloonContent(balloonTransformation);
  }
  

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

     <YMaps enterprise query={{apikey: '89cd12bf-209a-4bea-a680-816364016285'}} init={(ymaps) => handleApiAvaliable(ymaps)}>
        <div className="map" >
          <Map 
           style={{width: '80vw', height: '80vh', border: '1px solid #c49208', marginLeft: '10vw'}} 
           defaultState={{ center: [53.907668, 27.585951], zoom: 9 }}>
              {
              places.map((place, index) => (
              <Placemark key={index} geometry={place.coordinates} properties={{balloonContentHeader: place.name, balloonContent:`<img src=${place.imgUrl} style="width: 50px; height: 50px"`, balloonContentFooter: place.text}}
              modules={['geoObject.addon.balloon']}/>
              ))
              }
              {console.log(balloonContent)}
            
            <FullscreenControl />
          </Map>
        </div>
      </YMaps>
    </>
  )
}

export default App
