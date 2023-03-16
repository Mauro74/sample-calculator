import React from "react";
import { Wrapper } from "./styles";

const Spinner = ({ dark }) => {
  return (
    <Wrapper dark={dark}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Spinner;
