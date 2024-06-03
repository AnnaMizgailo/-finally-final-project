import React, {useState} from "react";

const Register = (setUserData) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = (event) => {
        console.log({username, password, repeatPassword});
        if(password === repeatPassword){
            setUserData({username, password});
            fetch("/auth", {username, password})
            return;
        }
        console.log("Password doesn't match!")

    };
    return (
        <div>
            <input type="text" value={username} 
            placeholder="Username: " onChange={(event) => setUsername(event.target.value)}/>
            <input type="text" value={password} 
            placeholder="Password: " onChange={(event) => setPassword(event.target.value)}/>
            <input type="text" value={repeatPassword} 
            placeholder="Repeat password: " onChange={(event) => setRepeatPassword(event.target.value)}/>

            <button onClick={handleSubmit}>Log in</button>
        </div>
    )
};

export default Register;