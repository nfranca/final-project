import { useEffect, useState } from "react";
import styled from "styled-components";
import mrmrsbeach from "./assets/mrmrsbeach.jpeg";
import SingleCoupleComponent from "./components/SingleCoupleComponent";

const FindCouple = () => {
  const [allCouple, setAllCouple] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [searchInput, setSearchInput] = useState({
    bride: "",
    groom: "",
  });
  console.log("allCouple", allCouple);
  useEffect(() => {
    fetch("/search")
      .then((res) => res.json())
      .then((data) => {
        setAllCouple(data.couple);
      });
  }, []);

  console.log("search", searchInput);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSearched(true);
    setSearchResults(
      allCouple.filter(
        (item) =>
          item.brideFirstName === searchInput.bride &&
          item.groomFirstName === searchInput.groom
      )
    );
  };
  return (
    <>
      <BackgroundImg>
        <StyledSearch>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="bride's firstName"
              onChange={(e) => {
                setSearchInput({ ...searchInput, bride: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="groom's firstName"
              onChange={(e) => {
                setSearchInput({ ...searchInput, groom: e.target.value });
              }}
            />
            <button
              disabled={Object.values(searchInput).includes("") ? true : false}
            >
              Search
            </button>
          </form>
        </StyledSearch>
        {/* <p>Type the first name of the couple</p> */}
        <div>
          <img src={mrmrsbeach} />
        </div>
        {isSearched &&
          searchResults.map((couple) => {
            return (
              <StyledSingleCoupleComponent>
                <SingleCoupleComponent
                  key={couple._id}
                  brideFirstName={couple.brideFirstName}
                  brideLastName={couple.brideLastName}
                  groomFirstName={couple.groomFirstName}
                  groomLastName={couple.groomLastName}
                  address={couple.address}
                  email={couple.email}
                  password={couple.password}
                  weddingDate={couple.weddingDate}
                  phone={couple.phone}
                  cerimonyPlace={couple.cerimonyPlace}
                  cerimonyAddress={couple.cerimonyAddress}
                  cerimonyDate={couple.cerimonyDate}
                  cerimonyTime={couple.cerimonyTime}
                  partyPlace={couple.partyPlace}
                  partyAddress={couple.partyAddress}
                  partyDate={couple.partyDate}
                  partyTime={couple.partyTime}
                />
              </StyledSingleCoupleComponent>
            );
          })}
      </BackgroundImg>
    </>
  );
};

const BackgroundImg = styled.div`
  overflow-y: hidden;
  height: 70vh;
  width: 70vw;
  p {
    margin-right: 10px;
  }

  img {
    margin: 0rem auto;
    width: 100%;
    height: 90vh;
  }
`;

const StyledSingleCoupleComponent = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  padding: 2rem;
`;
const StyledSearch = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  padding: 2rem;

  input {
    background: none;
    border: none;
    margin: 1rem 0rem;
    border: 2px solid lightgray;
    padding: 1rem;

    border-radius: 2rem;
    margin-left: 2rem;
  }
  button {
    width: 75%;
    color: black;
    background: lightblue;
    border: none;
    border-radius: 2rem;
    padding: 1rem;
    margin-left: 1.9rem;
    cursor: pointer;
    &:disabled {
      background: gray;
      color: red;
      cursor: not-allowed;
    }
  }
`;

export default FindCouple;

// to find the couple by name or date
// fetch(`/api/get-reservation/${reservationId}`)
// .then((res) => res.json())
// .then((data) => {
//   setPrevReservation(data.data);
// });
