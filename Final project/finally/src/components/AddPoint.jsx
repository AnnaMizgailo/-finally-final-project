import {useState} from "react"

const AddPoint = async (username, password, points, setUserData) => {
    const [coordinates, setCoordinates] = useState([[], []]);
    const [imgSrc, setImgSrc] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        console.log({coordinates, imgSrc, text});
        setUserData(username, password, [...points, {coordinates, imgSrc, text}]);
        fetch(`/place/${points.length}`)
    };
    const transformCoordinates = (coordinates) => {
        x = coordinates.split(", ")[0];
        y = coordinates.split(", ")[1];
        return [[x], [y]];
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={coordinates} 
                placeholder="coordinates: " onChange={(event) => setCoordinates(transformCoordinates(event.target.value))}/>
                <input type="text" value={text} 
                placeholder="=text: " onChange={(event) => setText(event.target.value)}/>
                <input type="text" value={imgSrc} 
                placeholder="img src: " onChange={(event) => setImgSrc(event.target.value)}/>
                <button onClick="submit">Add point</button>
            </form>
        </div>
    )
};

export default AddPoint;

