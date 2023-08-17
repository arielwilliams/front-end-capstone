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
      client_id:
        "865937179776-r5timpp1f57epgi3q06blrv8ftvu5qev.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    if (typeof google !== "undefined" && google.accounts) {
      google.accounts.id.initialize({
        client_id:
          "865937179776-r5timpp1f57epgi3q06blrv8ftvu5qev.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
    }
  }, []);

  return (
    <div className="App">
      <div
        id="signInDiv"
        className={`flex justify-start items-center mb-4 ${
          Object.keys(user).length !== 0 ? "hidden" : ""
        }`}
      ></div>
      <>
        {Object.keys(user).length !== 0 && (
          <button
            onClick={(e) => handleSignOut(e)}
            className="bg-emerald-900 hover:bg-emerald-700 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        )}
      </>

      {Object.keys(user).length !== 0 && (
        <div className="font-bold text-emerald-900 mt-4">
          <h2 class="pl-1">Hello, {user.given_name}!</h2>
        </div>
      )}
    </div>
  );
};

export default Login;
