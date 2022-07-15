import { useContext } from "react";
import styled from "styled-components";
import buque from "../src/assets/buque.jpeg";
import { UserContext } from "./UserContext";

const Home = () => {
  const { userModal, users, setUser, setUserModal } = useContext(UserContext);
  console.log(userModal);
  return (
    <>
      <BackgroundImg>
        {/* <img src="https://wallpaper.dog/large/20521569.jpg" /> */}
        <img src={buque} />
      </BackgroundImg>
      {userModal && (
        <StyledModal>
          <p>Please select one of the following</p>
          <button
            onClick={() => {
              setUserModal(false);
              setUser({ ...users, guests: true });
            }}
          >
            {" "}
            Guest{" "}
          </button>
          <button
            onClick={() => {
              setUserModal(false);
              setUser({ ...users, couple: true });
            }}
          >
            {" "}
            Couple{" "}
          </button>
        </StyledModal>
      )}
    </>
  );
};

const StyledModal = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  width: 30%;
  height: 30%;
  background-color: #f5eded;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    margin-left: 2rem;
    padding: 1rem 2rem;
    background: #bba14f;
    color: white;
    border: none;
    border-radius: 2rem;
  }
`;
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
