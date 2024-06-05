import React, {useState} from "react";
import PropTypes from "prop-types";

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const isNew = true;

    const handleSubmit = (event) => {
        console.log({username, password, repeatPassword});
        if(password === repeatPassword){
            props.setUserData({username, password, isNew});
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
Register.propTypes = {
    setUserData: PropTypes.func.isRequired
};

export default Register;