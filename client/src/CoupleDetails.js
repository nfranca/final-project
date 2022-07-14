import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoupleDetails = () => {
  const [coupleDetails, setCoupleDetails] = useState({});

  const { coupleId } = useParams();

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
        <>
          <h1>{coupleDetails.brideFirstName}</h1>
          <h1>{coupleDetails.groomFirstName}</h1>
          <h1>{coupleDetails.cerimonyPlace}</h1>
          <h1>{coupleDetails.cerimonyAddress}</h1>
          <h1>{coupleDetails.cerimonyDate}</h1>
          <h1>{coupleDetails.cerimonyTime}</h1>
          <h1>{coupleDetails.partyPlace}</h1>
          <h1>{coupleDetails.partyAddress}</h1>
          <h1>{coupleDetails.partyDate}</h1>
          <h1>{coupleDetails.partyTime}</h1>
        </>
      ) : (
        // render all the info that you need for couple details
        //picture uploaded as avatar or background
        //gifts
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default CoupleDetails;

//Gift
//Cerimony
//Party
