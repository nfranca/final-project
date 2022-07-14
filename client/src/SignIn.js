import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import React from "react";
import crown from "./assets/golden-crown.jpeg";
import Axios from "axios";
const { v4: uuidv4 } = require("uuid");

const SignIn = () => {
  const initalState = {
    brideFirstName: "test",
    brideLastName: "test",
    groomFirstName: "test",
    groomLastName: "test",
    address: "test",
    email: "test@gmail.com",
    password: "test",
    weddingDate: "test",
    phone: "test",
    cerimonyPlace: "test",
    cerimonyAddress: "test",
    cerimonyDate: "test",
    cerimonyTime: "test",
    partyPlace: "test",
    partyAddress: "test",
    partyDate: "test",
    partyTime: "test",
    imageUrl: "test",
    // TODO: bridename is the name that you gave to the input
  };

  const [formData, setFormData] = useState(initalState);
  const [uploadedImage, setUploadedImage] = useState("");

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const imageData = new FormData();
    imageData.append("file", uploadedImage[0]);
    imageData.append("upload_preset", "project");
    fetch("https://api.cloudinary.com/v1_1/nfranca/image/upload", {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("/accountcreation", {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            coupleId: uuidv4(),
            imageUrl: data.secure_url,
          }),
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
      });
    // .then(() => {
    //   fetch("/accountcreation", {
    //     method: "POST",
    //     body: JSON.stringify({ ...formData, coupleId: uuidv4() }),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.status !== 200) {
    //         console.log("couple not added!");
    //       } else {
    //         history.push("/confirmed");
    //       }
    //     });
    // });
  };

  // const uploadHandler = () => {
  //   const formData = new FormData();
  //   formData.append("file", uploadedImage[0]);
  //   formData.append("upload_preset", "project");
  //   fetch("https://api.cloudinary.com/v1_1/nfranca/image/upload", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFormData({ ...formData, imageUrl: data.secure_url });
  //     });
  // };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="asd">
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
        </div>
        <div>
          <img src={crown} />
        </div>
        <div className="asd">
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
        </div>
        <div>
          <img src={crown} />
        </div>
        <div className="asd">
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
          <input
            type="file"
            onChange={(e) => {
              setUploadedImage(e.target.files);
            }}
          />
        </div>
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

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .asd {
    display: inline;
    margin: 0rem 4rem;
    p {
      font-weight: bold;
    }
  }
  img {
    width: 10vw;
    height: 15vh;
  }
  input {
    margin: 1rem 0rem;
    padding: 0.7rem;
    display: block;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 2px solid #bba14f;
    width: 100%;
  }

  button {
    width: 100%;
    color: white;
    background: #bba14f;
    border: 2px solid;
    padding: 1.2rem;
    border-radius: 0.7rem;
    font-size: 1rem;
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
