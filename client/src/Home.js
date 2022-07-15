import styled from "styled-components";
import buque from "../src/assets/buque.jpeg";

const Home = () => {
  return (
    <>
      <BackgroundImg>
        {/* <img src="https://wallpaper.dog/large/20521569.jpg" /> */}
        <img src={buque} />
      </BackgroundImg>
    </>
  );
};

const BackgroundImg = styled.div`
  width: 90%;
  margin: 0rem auto;
  text-align: center;

  p {
    margin-right: 10px;
  }

  img {
    width: 100%;
    height: 79vh;
  }
`;

export default Home;

// "We loved the experience. The iWeeding is an indispensabile tool to all couples - M & L, 2021 - Calgary"

// " With the iWedding we were able to have our amazing honeymoon in Dubai - W & H, 2020 - Seattle"

// "We extremely recommend iWeeding S2 - Y & W, 2022 - Montreal"

// "Increbible! We loved it - A & V, 2020 - Mississauga "
