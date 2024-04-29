import { YMaps, Map } from '@pbe/react-yandex-maps';

function App() {

  return (
    <>
     <YMaps>
        <div className="map">
          <Map  defaultState={{ center: [53.907668, 27.585951], zoom: 9, width: "100%", }} />
        </div>
      </YMaps>
    </>
  )
}

export default App
