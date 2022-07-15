import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import flight from "../assets/flight.jpeg";
import hotel from "../assets/hotel.jpeg";
import spa from "../assets/spadubai.jpeg";
import { useHistory } from "react-router-dom";
const Gifts = () => {
  const { coupleId } = useParams();

  const history = useHistory();

  const priceObject = {
    flight: 100,
    hotel: 200,
    spa: 50,
  };
  const [giftcount, setGiftcount] = useState({
    flight: 0,
    hotel: 0,
    spa: 0,
  });

  let totalA =
    giftcount.flight * 100 + giftcount.hotel * 200 + giftcount.spa * 50;
  const [cardData, setCardData] = useState({
    amount: totalA,
    name: "",
    cardNumber: "",
  });
  const [modal, setModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setModal(true);
    totalA = 0;
    setGiftcount({
      flight: 0,
      hotel: 0,
      spa: 0,
    });
    setCardData({ amount: totalA, name: "", cardNumber: "" });
  };

  return (
    <>
      <Wrapper modal={modal}>
        <div>
          <p>Our Flight 100$</p>
          <img src={flight} alt="" />
          <div className="buy">
            <span>{giftcount.flight}</span>
            <button
              onClick={() => {
                setGiftcount({ ...giftcount, flight: giftcount.flight + 1 });
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (giftcount.flight > 0) {
                  setGiftcount({ ...giftcount, flight: giftcount.flight - 1 });
                }
              }}
            >
              -
            </button>
          </div>
        </div>

        <div>
          <p>Our Hotel 200$</p>
          <img src={hotel} alt="" />
          <div className="buy">
            <span>{giftcount.hotel}</span>{" "}
            <button
              onClick={() => {
                setGiftcount({ ...giftcount, hotel: giftcount.hotel + 1 });
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (giftcount.hotel > 0) {
                  setGiftcount({ ...giftcount, hotel: giftcount.hotel - 1 });
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div>
          <p>Our SPA 50$</p>
          <img src={spa} alt="" />
          <div className="buy">
            <span>{giftcount.spa}</span>
            <button
              onClick={() => {
                setGiftcount({ ...giftcount, spa: giftcount.spa + 1 });
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (giftcount.spa > 0) {
                  setGiftcount({ ...giftcount, spa: giftcount.spa - 1 });
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <span>Total Amount $ {totalA}</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Card Holder's Name"
            onChange={(e) => {
              setCardData({ ...cardData, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Card Number"
            onChange={(e) => {
              setCardData({ ...cardData, cardNumber: e.target.value });
            }}
          />
          {Object.values(cardData).includes("") || totalA === 0 ? (
            <button disabled>Purchase</button>
          ) : (
            <button>Purchase</button>
          )}
        </form>
      </Wrapper>

      {modal && (
        <StyledModal>
          <button
            onClick={() => {
              setModal(false);
              history.push("/");
            }}
          >
            {" "}
            X{" "}
          </button>
          <p>Thank you for your gift ♡ </p>
        </StyledModal>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 80%;
  height: 70vh;
  display: flex;
  border: 2px solid #bba14f;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0rem auto;
  padding: 2rem;
  position: relative;
  background-color: ${(props) => (props.modal ? "white" : null)};
  opacity: ${(props) => (props.modal ? "0.2" : null)};

  img {
    display: block;
    width: 330px;
    height: 200px;
    border-radius: 2rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buy {
    span {
      margin-right: 1rem;
    }
    button {
      text-align: center;
      color: black;
      padding: 0.4rem 0.7rem;
      font-size: 1.2rem;
      background: transparent;
      border: 1px solid #bba14f;
      border-radius: 0.3rem;
      cursor: pointer;
      margin-left: 1rem;
    }
    padding: 1rem;
    display: inline;
  }
  form {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    border: 1px solid #bba14f;
    border-radius: 0.4rem;
    padding: 2rem 4rem;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 6rem;
    input {
      padding: 1rem;
      margin-top: 1rem;

      border: 1px solid #bba14f;
      border-radius: 0.3rem;
    }
    button {
      padding: 1rem 3rem;
      margin-top: 1rem;
      border: 1px solid lightgray;
      border-radius: 0.3rem;
      background: #bba14f;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
        background-color: lightgray;
        color: white;
      }
    }
  }
`;

const StyledModal = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  width: 30%;
  height: 30%;
  background-color: #f5eded;
  font-size: 2rem;
  color: #bba14f;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;
export default Gifts;
