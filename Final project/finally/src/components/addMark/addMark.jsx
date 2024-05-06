import { Placemark } from '@pbe/react-yandex-maps';

const AddMarks = (arrayOfCoordinates) => arrayOfCoordinates.map((x, y) => (<Placemark geometry={[{x}, {y}]}/>)) 

export default AddMarks;