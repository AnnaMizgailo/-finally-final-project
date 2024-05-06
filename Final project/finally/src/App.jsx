import { YMaps, Map, GeolocationControl, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import AddMarks from './components/addMark/addMark';
function App() {
  const placemarks = [{x: 53.907668, y: 27.585951}, ]
  return (
    <>
     <YMaps enterprise query={{apikey: '89cd12bf-209a-4bea-a680-816364016285'}}>
        <div className="map" >
          <Map 
           style={{width: '80vw', height: '80vh', border: '1px solid #c49208', marginLeft: '10vw'}} 
           defaultState={{ center: [53.907668, 27.585951], zoom: 9, controls: [] }}>
            <AddMarks arrayOfCoordinates={placemarks}/>
          </Map>
        </div>
      </YMaps>
    </>
  )
}

export default App
