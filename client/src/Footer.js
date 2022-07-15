import styled from "styled-components";
import logo from "./assets/iweddinglogo.jpeg";
import SocialFollow from "./SocialFollow";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Text>The right website for your wedding ♡</Text>
      <div>
        <a href="https://www.youtube.com" className="youtube social">
          <AiOutlineYoutube />
        </a>
        <a href="https://www.facebook.com" className="facebook social">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.twitter.com" className="twitter social">
          <FiTwitter />
        </a>
        <a href="https://www.instagram.com" className="instagram social">
          <AiOutlineInstagram />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  position: absolute;
  bottom: 0;
  padding: 2rem 0rem;
  width: 100%;
  div {
    padding: 0rem 6rem;
    a {
      margin: 0rem 2rem;
      font-size: 2rem;
      color: black;
      cursor: pointer;
    }
  }
`;
const Logo = styled.img`
  height: 100%;
`;
const Text = styled.p`
  color: #bba14f;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-align: center;
  margin: 12px 0 0 24px;
`;

export default Footer;
