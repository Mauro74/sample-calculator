import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
   z-index: 1;
   position: absolute;
   right: 0;
   top: 0;
   width: 18px;
   height: 18px;

   &:hover {
      .tooltip {
         display: block;
      }
   }


`;
const ToolTip = styled.div`
   display: none;
   padding: 1rem;
   border-radius: 0.5rem;
   position: absolute;
   top: 26px;
   right: -10px;
   width: 300px;
   background: var(--grey-light);

   &:after {
      bottom: 100%;
      left: 280px;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
   }
   
   &:after {
      border-color: transparent;
      border-bottom-color: var(--grey-light);
      border-width: 6px;
      margin-left: -6px;
   }
`;

const Icon = styled.div`
   cursor: pointer;
`;

const InfoTool = ({text}) => {
   return (
      <Wrapper>
         <Icon>
            <FaInfoCircle color={'var(--grey-medium)'} />
         </Icon>
         <ToolTip className="tooltip light small">
            {text}
         </ToolTip>
      </Wrapper>
   )
}

export default InfoTool

