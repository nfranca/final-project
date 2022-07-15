import { useEffect, useState } from "react";
import styled from "styled-components";
import mrmrsbeach from "./assets/mrmrsbeach.jpeg";
import SingleCoupleComponent from "./components/SingleCoupleComponent";
import { useHistory } from "react-router-dom";

const FindCouple = () => {
  const history = useHistory();
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
              placeholder="Bride First Name"
              onChange={(e) => {
                setSearchInput({ ...searchInput, bride: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Groom First Name"
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
              <StyledSingleCoupleComponent
                key={couple._id}
                onClick={() => {
                  history.push(`/coupledetails/${couple.coupleId}`);
                }}
              >
                <SingleCoupleComponent
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
                  imageUrl={couple.imageUrl}
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
  width: 90vw;
  margin: 0rem auto;
  p {
    margin-right: 10px;
  }

  img {
    margin: 0rem auto;
    width: 90vw;
    height: 80vh;
  }
`;

const StyledSingleCoupleComponent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  cursor: pointer;
  border: 2px solid #bba14f;
  border-radius: 1rem;
`;
const StyledSearch = styled.div`
  position: fixed;
  top: 20%;
  left: 60%;
  padding: 2rem;

  input {
    background: none;
    border: none;
    margin: 1rem 0rem;
    border: 2px solid #bba14f;
    padding: 1rem;
    text-align: center;

    border-radius: 2rem;
    margin-left: 2rem;
  }
  button {
    width: 75%;
    color: white;
    background: #bba14f;
    border: none;
    border-radius: 2rem;
    padding: 1rem;
    margin-left: 1.9rem;
    cursor: pointer;
    &:disabled {
      background: lightgray;
      color: white;
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
