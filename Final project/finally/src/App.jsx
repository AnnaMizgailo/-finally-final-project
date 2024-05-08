import { YMaps, Map, GeolocationControl, Placemark, FullscreenControl, TypeSelector, Clusterer } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import AddMarks from './components/addMark/addMark';
function App() {
  const placemarks = [[ [53.907668], [27.585951]], [[57.907668], [28.585951]]];
  return (
    <>
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
