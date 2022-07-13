import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const google = window.google;

const MyAccount = () => {
  const [user, setUser] = useState({});

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    // global google
    console.log("Testing");
    google.accounts.id.initialize({
      client_id:
        "144855987522-d2f6ceafh3migmhspi9l4ib0gvsmoi1s.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    // try {
    //   google.accounts.id.initialize({
    //     client_id:
    //       "144855987522-d2f6ceafh3migmhspi9l4ib0gvsmoi1s.apps.googleusercontent.com",
    //     callback: handleCallBackResponse,
    //   });

    //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
    //     theme: "outline",
    //     size: "large",
    //   });
    //   google.accounts.id.prompt();
    // } catch (err) {
    //   console.log(err);
    // }

    google.accounts.id.prompt();
  }, []);

  // If we have no user: sign in button
  // If we have a new user: show the log out button

  return (
    <>
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}

      {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )}
    </>
  );
};

export default MyAccount;

//Google Cloud Platform
//Your client ID: 144855987522-d2f6ceafh3migmhspi9l4ib0gvsmoi1s.apps.googleusercontent.com
//Your client secret: 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
//https://www.youtube.com/watch?v=roxC8SMs7HU&t=195s
