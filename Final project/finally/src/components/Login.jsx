import React, {useState} from "react";
import PropTypes from "prop-types";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isNew = false;


    const handleSubmit = (event) => {
        console.log({username, password});
        props.setUserData({username, password, isNew});
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
}
Login.propTypes = {
    setUserData: PropTypes.func.isRequired
};

export default Login;