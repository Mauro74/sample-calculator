import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  margin: 0 6px;
  min-width: 150px;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
  background: var(--white);
  color: var(--${(props) => (props.secondary ? "black" : "orange")});
  border: solid 1px var(--${(props) => (props.secondary ? "black" : "orange")});
  &:active {
    background: var(--grey-lighter);
  }

  @media all and (max-width: 480px) {
    margin: 8px 6px;
  }
`;

const FormButton = ({ secondary, label, action, type }) => {
  return (
    <Button type={type} onClick={action} secondary={secondary}>
      {label}
    </Button>
  );
};

export default FormButton;
