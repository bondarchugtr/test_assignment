import { Logo } from "../../common/logo";
import { Button } from "../../common/button";
import styled from "styled-components";
const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 13px;
  padding-bottom: 13px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    min-width: 768px;

  }
  @media screen and (min-width: 1024px) {
    min-width: 1280px;
 
  }
    @media screen and (min-width: 2560px) {
    min-width: 2560px;
  
`;
const StyleContainerButton = styled.div`
  display: flex;
`;

const StyleButtonText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.65;
`;

export const Header = () => {
  return (
    <HeaderSection>
      <Logo />
      <StyleContainerButton>
        <Button>
          <StyleButtonText>Users</StyleButtonText>
        </Button>
        <Button>
          <StyleButtonText>Sign up</StyleButtonText>
        </Button>
      </StyleContainerButton>
    </HeaderSection>
  );
};
