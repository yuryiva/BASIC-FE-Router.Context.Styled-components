import React from "react";
import styled from "styled-components";

const Page2 = () => {
  return (
    <div>
      <Wrapper>
        <hr /> I AM PAGE 2 WITH STYLED COMPONENT
      </Wrapper>
    </div>
  );
};

export default Page2;

const Wrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
