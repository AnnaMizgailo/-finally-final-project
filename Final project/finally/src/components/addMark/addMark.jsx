import { Placemark } from '@pbe/react-yandex-maps';

const AddMarks = (arrayOfCoordinates) => {
    {arrayOfCoordinates.arrayOfCoordinates.map((coordinates, index) => (
        <Placemark key={index} geometry={coordinates}/>
        
      ))}
}


export default AddMarks;