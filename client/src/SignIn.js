import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import React from "react";
import crown from "./assets/golden-crown.jpeg";

const SignIn = () => {
  const initalState = {
    brideFirstName: "",
    brideLastName: "",
    groomFirstName: "",
    groomLastName: "",
    address: "",
    email: "",
    password: "",
    weddingDate: "",
    phone: "",
    cerimonyPlace: "",
    cerimonyAddress: "",
    cerimonyDate: "",
    cerimonyTime: "",
    partyPlace: "",
    partyAddress: "",
    partyDate: "",
    partyTime: "",
    // TODO: bridname is the name that you gave to the input
  };

  const [formData, setFormData] = useState(initalState);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/accountcreation", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          console.log("couple not added!");
        } else {
          history.push("/confirmed");
        }
      });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <p>About the Couple...</p>
        <input
          type="text"
          name="brideFirstName"
          placeholder="Bride First Name"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.brideFirstName}
        />
        <input
          type="text"
          name="brideLastName" // todo add these to all all inputs shold have name
          placeholder="Bride Last Name"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.brideLastName}
        />
        <input
          type="text"
          name="groomFirstName"
          placeholder="Groom First Name"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.groomFirstName}
        />
        <input
          type="text"
          name="groomLastName"
          placeholder="Groom Last Name"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.groomLastName}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.address}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.password}
        />
        <input
          type="date"
          name="weddingDate"
          placeholder="Wedding Date"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.weddingDate} // I don't think we need it here, we already have it in the cerimony and party
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone Number"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.phone}
        />

        <div>
          <img src={crown} />
        </div>

        <p>About the Cerimony...</p>
        <input
          type="text"
          name="cerimonyPlace"
          placeholder="Place"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.cerimonyPlace}
        />
        <input
          type="text"
          name="cerimonyAddress"
          placeholder="Address"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.cerimonyAddress}
        />
        <input
          type="date"
          name="cerimonyDate"
          placeholder="Date"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.cerimonyDate}
        />
        <input
          type="time"
          name="cerimonyTime"
          placeholder="Time"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.cerimonyTime}
        />

        <div>
          <img src={crown} />
        </div>

        <p>About the Party...</p>
        <input
          type="text"
          name="partyPlace"
          placeholder="Place"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.partyPlace}
        />
        <input
          type="text"
          name="partyAddress"
          placeholder="Address"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.partyAddress}
        />
        <input
          type="date"
          name="partyDate"
          placeholder="Date"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.partyDate}
        />
        <input
          type="time"
          name="partyTime"
          placeholder="Time"
          onChange={(e) => {
            updateInput(e);
          }}
          value={formData.partyTime}
        />

        {Object.values(formData).includes("") ? (
          <button disabled>Confirm</button>
        ) : (
          <button>Confirm</button>
        )}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //border: 2px solid red;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  img {
    width: 10vw;
    height: 15vh;
  }
  input {
    margin: 1rem 0rem;
    display: block;
  }
  button {
    width: 100%;
    color: white;
    background: #bba14f;
    border: 2px solid;
    cursor: pointer;
    &:disabled {
      background: gray;
      color: white;
      cursor: not-allowed;
    }
  }
`;

export default SignIn;

//send reservation to backend

// const coRegistration = () => {
//   const history = useHistory();
//   const coupleRegistration = {
// weedingDate: "",
// brideFirstName: "",
// brideLastName: "",
// groomFirstName: "",
// groomLastName: "",
// coupleEmail: "",
// phone: "",
// address: "",
// password: "",
//   };

// const ceRegistration = () => {
//   const history = useHistory();
//   const cerimonyRegistration = {
// coupleEmail: "",
// place: "",
// address: "",
// date: "",
// time: "",
//   };

// const paRegistration = () => {
//   const history = useHistory();
//   const partyRegistration = {
// coupleEmail: "",
// place: "",
// address: "",
// date: "",
// time: "",
//   };

//   const { selectedSeats, selectedFlight, setReservation } =
//     useContext(FlightContext);
//   const [reservationData, setReservationData] = useState(initialReservation);

// selectedSeats.map((seat) => {
//   const reservationObject = {
//     id: uuidv(),
//     flight: selectedFlight,
//     seat: seat,
//     firstName: reservationData.firstName,
//     lastName: reservationData.lastName,
//     email: reservationData.email,
//   };
//   allReservations.push(reservationObject);

// fetch("/api/add-reservation", {
//   method: "POST",
//   body: JSON.stringify(reservationObject),
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.status !== 200) {
//       console.log("reservation not added!");
//     } else {
//       history.push("/confirmed");
//       localStorage.setItem(
//         "reservation",
//         JSON.stringify(reservationObject)
//       );
//       setReservation(reservationObject);
//     }
//   });
// });
// };
