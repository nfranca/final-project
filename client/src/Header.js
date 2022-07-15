//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/iweddinglogo.jpeg";
import { UserContext } from "./UserContext";

const Header = () => {
  const { setUserModal, users } = useContext(UserContext);
  const google = window.google;
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
    google.accounts.id.initialize({
      client_id:
        "144855987522-d2f6ceafh3migmhspi9l4ib0gvsmoi1s.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
    if (user.given_name) {
      setUserModal(true);
    }
  }, [user]);

  return (
    <Nav>
      <div>
        <img src={logo} />
      </div>
      <div className="iWedding">
        <h1>iWedding</h1>
      </div>
      <ul>
        {users.guests ||
          (users.couple && (
            <li>
              <Link to="/">Home</Link>
            </li>
          ))}

        {users.couple && (
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        )}
        {users.guests && (
          <li>
            <Link to="/findcouple">Find a couple</Link>
          </li>
        )}
      </ul>
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <StyledSingOut onClick={(e) => handleSignOut(e)}>
          Sign Out
        </StyledSingOut>
      )}

      {user && (
        <StyledUser>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </StyledUser>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  justify-content: space-evenly;
  max-height: 10vh;
  .iWedding {
    margin-left: 5rem;
  }

  h1 {
    margin-right: 150px;
  }

  img {
    margin-right: 100px;
    height: 80px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #bba14f;
  }

  li {
    margin-right: 40px;
  }
`;

const StyledUser = styled.div`
  display: flex;
`;

const StyledSingOut = styled.button`
  background-color: #bba14f;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
`;

export default Header;
