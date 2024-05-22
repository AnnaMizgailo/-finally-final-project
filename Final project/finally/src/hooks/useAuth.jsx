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

    const logout = async () =>{
        try{
            const response = await axiosInstance.get(`${host}/logout`);
            if (response.data.success){
                setAuthentication(false);
            }
        }catch{
            console.error(error);
        }
    };
    const checkAuth = async () =>{
        try{
            const response = await axiosInstance.get(`${host}/auth`);
            console.log(response.data.isAuthenticated);
        }catch{
            console.log(error);
        }
    }

    useEffect(()=>{
        checkAuth();
    }, []);

    return { isAuthenticated, login, logout};
};


