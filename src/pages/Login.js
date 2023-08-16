import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = ({ userCallback }) => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    userCallback(userObject);
    document.getElementById("signInDiv").hidden = true;
    navigate("/dashboard");
    console.log(userObject);
    // api call to the backend, post the user info including name and picture and sub ID
    // userObject.result.sub
    // logic in the api call in the backend to check if that ID is already in the database
    // if it is, terminate API. if it has not, post it
  };

  const handleSignOut = (event) => {
    setUser({});
    userCallback({});
    document.getElementById("signInDiv").hidden = false;
    navigate("/home");
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "865937179776-r5timpp1f57epgi3q06blrv8ftvu5qev.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // if we have no user: sign in button
  // if we have a user: show the log out button

  return (
    <div className="App">
      <div id="signInDiv"></div>
      <>
        {Object.keys(user).length !== 0 && (
          <button onClick={(e) => handleSignOut(e)}>Logout</button>
        )}
      </>

      {Object.keys(user).length !== 0 && (
        <div className="font-bold">
          <h3>Hello, {user.name}!</h3>
        </div>
      )}
    </div>
  );
};

export default Login;
