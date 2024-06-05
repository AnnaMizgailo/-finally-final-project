import axios from "axios";
import {useState, useEffect} from "react";

const host = "http://localhost:3000";
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: host
});

export const useAuth = () => {
    const [isAuthenticated, setAuthentication] = useState(false);

    const login = async (username, password, isNew) => {
        try{
            let response = false;
            console.log("From login - username:" + username + " password:", password, "isnew: ", isNew);
            if(isNew){
                response = await axiosInstance.post(
                    `${host}/add`, 
                        {username: username, password: password}
                    
                );
            }else{
                response = await axiosInstance.post(
                    `${host}/login`,
                        {username: username, password: password}
                    
                );
            }
            
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
                console.log("You logged out")
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
            console.error(error);
        }
    }

    useEffect(()=>{
        checkAuth();
    }, []);

    return { isAuthenticated, login, logout};
};


