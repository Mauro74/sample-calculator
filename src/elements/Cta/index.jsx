import React from "react";
import styled from "styled-components";

const Action = styled.a`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 14px 32px;
  background: var(--${(props) => props.bgColor});
  transition: all 0.25s ease;
  min-width: 250px;

  &:hover {
    background: var(--gun);
    div {
      color: var(--${(props) => props.hoverColor});
      path {
        fill: var(--${(props) => props.hoverColor});
      }
    }
  }

  div {
    height: 22px;
    color: var(--${(props) => props.textColor});
    svg {
      width: 22px;
      height: 22px;
      margin-left: 8px;
    }
  }
`;

const Cta = ({ text, children, bgColor, textColor, hoverColor = "white", url, actionClick }) => {
  return (
    <Action onClick={actionClick} bgColor={bgColor} textColor={textColor} hoverColor={hoverColor} href={url}>
      <div>{text}</div> <div>{children}</div>
    </Action>
  );
};

export default Cta;
