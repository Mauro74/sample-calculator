import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 992px) {
    width: 970px;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
  * {
    color: var(--${(props) => props.color});
  }
`;

const Container = ({ children, color }) => {
  return <Section color={color}>{children}</Section>;
};

export default Container;
