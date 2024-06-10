import {useState} from "react"
import PropTypes from "prop-types";

const AddPoint = (props) => {
    const [coordinatesX, setCoordinatesX] = useState([0]);
    const [coordinatesY, setCoordinatesY] = useState([0]);
    const [imgUrl, setImgUrl] = useState("");
    const [text, setText] = useState("");
    const [name, setName] = useState("");

   
    const handleSubmit = (event) => {
        console.log("from addpoint - ", {name, coordinates: [coordinatesX, coordinatesY], imgUrl, text});
        props.setPlace({name, coordinates: [coordinatesX, coordinatesY], imgUrl, text});
    };
    
    return (
        <div>
                <input type="text" value={name} 
                placeholder="name: " onChange={(event) => setName((event.target.value))}/>
                <input type="text" value={coordinatesX} 
                placeholder="coordinates x: " onChange={(event) => setCoordinatesX([+(event.target.value)])}/>
                <input type="text" value={coordinatesY} 
                placeholder="coordinates y: " onChange={(event) => setCoordinatesY([+(event.target.value)])}/>
                <input type="text" value={text} 
                placeholder="=text: " onChange={(event) => setText(event.target.value)}/>
                <input type="text" value={imgUrl} 
                placeholder="img src: " onChange={(event) => setImgUrl(event.target.value)}/>
                <button onClick={handleSubmit}>Add point</button>
         
        </div>
    )
}
AddPoint.propTypes = {
    setPlace:  PropTypes.func.isRequired
};

export default AddPoint;

