import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Login = ({userCallback}) => {

    const [ user, setUser ] = useState({});

    const handleCallbackResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwt_decode(response.credential);
        setUser(userObject);
        userCallback(userObject)
        document.getElementById("signInDiv").hidden = true;
    }

    const handleSignOut = (event) => {
        setUser({});
        userCallback({})
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
        client_id: "865937179776-r5timpp1f57epgi3q06blrv8ftvu5qev.apps.googleusercontent.com",
        callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}
        )
    }, []);

    // if we have no user: sign in button
    // if we have a user: show the log out button

    return (
        <div className="App">
            <div id="signInDiv"></div>
            { Object.keys(user).length !== 0 &&
            <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            }
        
            { Object.keys(user).length !== 0 &&
            <div>
                <h3>Hello {user.name}!</h3>
            </div>
            }
        </div>
    );
}

export default Login;