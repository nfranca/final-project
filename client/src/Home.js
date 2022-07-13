import styled from "styled-components";
import buque from "../src/assets/buque.jpeg"

const Home = () => {
  return (
    <>
    <BackgroundImg>
    {/* <p>The right website for your wedding</p> */}
      <div>
        {/* <img src="https://wallpaper.dog/large/20521569.jpg" /> */}
        <img src={buque}/>
      </div>
    </BackgroundImg>
    </>
  );
};

const BackgroundImg = styled.div`
  
  p {
    margin-right: 10px;
  }

  img {
    width: 100vw;
    height: auto;
    background-size: cover;
  }`


export default Home;
