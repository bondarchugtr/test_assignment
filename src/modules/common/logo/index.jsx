import styled from "styled-components";
import sprite from "../../../assets/images/sprite.svg";
export const Logo = () => {
  const StyledLogo = styled.div``;
  const LogoSvg = styled.svg`
    width: 104px;
    height: 26px;
  `;
  return (
    <>
      <StyledLogo>
        <LogoSvg width="104px" height="26px">
          <use href={`${sprite}#icon-Logo`}></use>
        </LogoSvg>
      </StyledLogo>
    </>
  );
};
