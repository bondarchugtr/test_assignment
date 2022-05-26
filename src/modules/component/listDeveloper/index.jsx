import { useState } from "react";
import styled from "styled-components";
const StyledSection = styled.section``;

const StyledListDeveloper = styled.ul``;

export const ListDeveloper = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledSection>
      <StyledListDeveloper>
        {/* {list.map((item) => ())} */}
      </StyledListDeveloper>
    </StyledSection>
  );
};
