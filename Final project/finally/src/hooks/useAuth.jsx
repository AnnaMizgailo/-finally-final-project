import axios from "axios";
import {useState, useEffect} from "react";

const host = "http://localhost:3000";
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: host
});

export const useAuth = () => {
    const [isAuthenticated, setAuthentication] = useState(false);

    const login = async (username, password) => {
        try{
            console.log(username, password);
            const response = await axiosInstance.post(
                `${host}/login`,
                {
                    username,
                    password
                },
                {
                    headers:{
                        "Content-Type": "aplication/json"
                    }
                }
            );
            if(response.data.success){
                setAuthentication(true);
            }
        } catch (error){
            console.error(error);
        }
    };

    useEffect(()=>{
        checkAuth();
    }, []);

    return { isAuthenticated, login, logout};
};


