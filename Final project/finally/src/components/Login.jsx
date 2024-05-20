import React, {useState} from "react";

const Login = ({setUserData}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        console.log({username, password});
        setUserData({username, password});
    };
    return (
        <div>
            <input type="text" value={username} 
            placeholder="Username: " onChange={(event) => setUsername(event.target.value)}/>
            <input type="text" value={password} 
            placeholder="Password: " onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={handleSubmit}>Log in</button>
        </div>
    )
};

export default Login;