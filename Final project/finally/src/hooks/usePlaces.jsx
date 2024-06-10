import axios from "axios";
import {useState, useEffect} from "react";

const host = "http://localhost:3000";
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: host
});

export const usePlaces = () => {
    const addPlace = async (name, coordinates, text, imgUrl) => {
        try{
                const response = await axiosInstance.post(
                    `${host}/place/add`, 
                        {name: name, coordinates: coordinates, text: text, imgUrl: imgUrl}
                );
            } catch (error){
            console.error(error);
        }
    };
    return {addPlace};
};

export default usePlaces;


