import styled from "styled-components";
import img from "../../../assets/images/pexels-alexandr-podvalny-1227513.jpeg";

const StyledHero = styled.section`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledHeroBlockText = styled.div`
  padding: 40px 16px 70px 16px;
  @media screen and (min-width: 768px) {
    padding: 89px 194px 88px 194px;
  }
`;

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 1;
  margin-bottom: 21px;
  text-align: center;

  color: #ffffff;
`;

const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;

  text-align: center;

  color: #ffffff;
`;
export const Hero = () => {
  return (
    <>
      <StyledHero>
        <StyledHeroBlockText>
          <StyledTitle>Test assignment for front-end developer</StyledTitle>
          <StyledText>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </StyledText>
        </StyledHeroBlockText>
      </StyledHero>
    </>
  );
};
