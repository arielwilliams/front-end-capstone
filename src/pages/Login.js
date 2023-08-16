import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const Login = ({ userCallback }) => {
  const [user, setUser] = useState({});
  const [userChecked, setUserChecked] = useState(false);

  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    userCallback(userObject);
    document.getElementById("signInDiv").hidden = true;
    navigate("/dashboard");
    console.log(userObject);
  };

  const handleSignOut = (event) => {
    setUser({});
    userCallback({});
    document.getElementById("signInDiv").hidden = false;
    navigate("/home");
  };

   /* global google */
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "865937179776-r5timpp1f57epgi3q06blrv8ftvu5qev.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  useEffect(() => {
    if (Object.keys(user).length !== 0 && !userChecked) {
      setUserChecked(true);

      fetch(`https://jakd-backend-capstone.onrender.com/dashboard/user/users`)
        .then((response) => response.json())
        .then((data) => {
          try {
            const userId = user.sub; 
            const userExists = data.some((user) => user.subId === userId);

            if (userExists) {
              console.log("User exists");
            } else {
              fetch(`https://jakd-backend-capstone.onrender.com/dashboard/user/save-user`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  subId: userId,
                  givenName: user.given_name,
                  email: user.email,
                  name: user.name,
                  picture: user.picture,
                }),
              })
                .then((response) => response.json())
                .then((result) => {
                  console.log("User saved successfully:", result);
                })
                .catch((error) => {
                  console.log("Error saving user:", error);
                });
            }
          } catch (error) {
            console.log("Error processing user data:", error);
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    }
  }, [user, userChecked]);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <>
          <button onClick={(e) => handleSignOut(e)}>Logout</button>
          <div className="font-bold">
            <h3>Hello, {user.name}!</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;

