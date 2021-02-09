import React from "react";
import styled from "styled-components";

const Page1 = () => {
  return (
    <Wrapper>
      <hr />I AM PAGE 1 WITH STYLED COMPONENT
    </Wrapper>
  );
};

export default Page1;

const Wrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
