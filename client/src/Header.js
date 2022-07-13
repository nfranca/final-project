//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/iweddinglogo.jpeg";

const Header = () => {
  return (
    <Nav>
      <div>
        <img src={logo} />
      </div>
      <div className="iWedding">
        <h1>iWedding</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myaccount">My account</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/findcouple">Find a couple</Link>
        </li>
      </ul>
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

export default Header;
