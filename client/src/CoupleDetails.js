import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CoupleDetails = () => {
  const [coupleDetails, setCoupleDetails] = useState({});

  const { coupleId } = useParams();

  const history = useHistory();
  useEffect(() => {
    fetch(`/get-couple/${coupleId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoupleDetails(data.data);
      });
  }, []);
  return (
    <div>
      {coupleDetails ? (
        <Wrapper>
          <div className="info">
            <p>Our couple</p>
            <img src={coupleDetails.imageUrl} alt="" />
            <h3>brideFirstName: {coupleDetails.brideFirstName}</h3>
            <h3>groomFirstName: {coupleDetails.groomFirstName}</h3>
          </div>
          <div className="info">
            <p>cerimonyPlace</p>
            <h3>cerimonyPlace: {coupleDetails.cerimonyPlace}</h3>
            <h3>cerimonyAddress: {coupleDetails.cerimonyAddress}</h3>
            <h3>cerimonyDate: {coupleDetails.cerimonyDate}</h3>
            <h3>cerimonyTime: {coupleDetails.cerimonyTime}</h3>
          </div>
          <div className="info">
            <p>partyPlace</p>
            <h3>partyPlace: {coupleDetails.partyPlace}</h3>
            <h3>partyAddress: {coupleDetails.partyAddress}</h3>
            <h3>partyDate: {coupleDetails.partyDate}</h3>
            <h3>partyTime: {coupleDetails.partyTime}</h3>
          </div>

          <button
            onClick={() => {
              history.push(`/coupledetails/${coupleId}/gifts`);
            }}
          >
            Our gift
          </button>
        </Wrapper>
      ) : (
        // render all the info that you need for couple details
        //picture uploaded as avatar or background
        //gifts
        <h2>Loading</h2>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  width: 80%;
  height: 60vh;
  border: 2px solid red;
  border-radius: 6rem;
  padding: 2rem;
  margin: 0rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  button {
    position: absolute;
    bottom: 0;
    padding: 1rem 2rem;
    background: transparent;
    border: 3px solid pink;
    color: green;
    font-size: 1.2rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
    &:hover {
      color: pink;
      background: green;
    }
  }
  img {
    display: block;
    max-width: 630px;
    max-height: 450px;
    width: auto;
    height: auto;
    border-radius: 2rem;
  }
  .info {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 2rem;
      font-weight: bold;
      color: gold;
    }
  }
`;

export default CoupleDetails;
