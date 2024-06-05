import axios from "axios";
import {useState, useEffect} from "react";

const host = "http://localhost:3000";
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: host
});

export const usePlaces = () => {
    const [place, setPlace] = useState({name: "", coordinates: [[],[]], text: "", imgSrc: ""})
    const addPlace = async (name, coordinates, text, imgSrc) => {
        try{
                response = await axiosInstance.post(
                    `${host}/place/add`, 
                        {name: name, coordinates: coordinates, text: text, imgSrc: imgSrc}
                );
                if(response.data.success){
                    setPlace({name: name, coordinates: coordinates, text: text, imgSrc: imgSrc});
                }
            } catch (error){
            console.error(error);
        }
    };

    useEffect(()=>{
        
    }, []);

    return {addPlace};
};

export default usePlaces;


