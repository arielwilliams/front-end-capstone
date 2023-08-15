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

    const userId = userObject.sub; // Extract the sub ID

    // Check if user ID exists in the database
    // ...

fetch(`http://localhost:5000/dashboard/user/users`)
.then(response => response.json())
.then(data => {
  if (!data.exists) {
    // If user ID doesn't exist, save it in the database
    fetch(`http://localhost:5000/dashboard/user/save-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subId: userId }),
    })
    .then(response => response.json())
    .then(result => {
      console.log("User saved:", result);
    })
    .catch(error => {
      console.log("Error saving user:", error);
    });
  }
})
.catch(error => {
  console.log("Error checking user:", error);
});


  };

  const handleSignOut = (event) => {
    setUser({});
    userCallback({});
    document.getElementById("signInDiv").hidden = false;
    navigate("/home")
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
