import styled from "styled-components";

const SingleCoupleComponent = ({
  brideFirstName,
  groomFirstName,
  imageUrl,
}) => {
  return (
    <Wrapper>
      <img
        src={imageUrl}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        alt=""
      />
      <p>Bride First Name: {brideFirstName}</p>
      <p>Groom First Name: {groomFirstName}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-left: 1rem;
  }
`;

export default SingleCoupleComponent;
