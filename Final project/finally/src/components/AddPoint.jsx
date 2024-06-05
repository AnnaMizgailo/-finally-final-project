import {useState} from "react"
import PropTypes from "prop-types";

const AddPoint = (props) => {
    const [coordinates, setCoordinates] = useState([[0],[0]]);
    const [imgSrc, setImgSrc] = useState("");
    const [text, setText] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        transformCoordinates(coordinates)
        console.log({name, coordinates, imgSrc, text});
        props.setPlace({name, coordinates, imgSrc, text});
    };
    const transformCoordinates = (coordinates) => {
        let x = +coordinates.split(", ")[0];
        let y = +coordinates.split(", ")[1];
        setCoordinates([[x], [y]]);
    }
    return (
        <div>
            
                <input type="text" value={coordinates} 
                placeholder="coordinates: " onChange={(event) => setCoordinates((event.target.value))}/>
                <input type="text" value={text} 
                placeholder="=text: " onChange={(event) => setText(event.target.value)}/>
                <input type="text" value={imgSrc} 
                placeholder="img src: " onChange={(event) => setImgSrc(event.target.value)}/>
                <button onClick={handleSubmit}>Add point</button>
         
        </div>
    )
}
AddPoint.propTypes = {
    setPlace:  PropTypes.func.isRequired
};

export default AddPoint;

