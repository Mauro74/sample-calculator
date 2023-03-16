import styled from "styled-components";

export const Overlay = styled.div`
   z-index: 4;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: var(--smoke);
`;

export const ModalBody = styled.div`
   overflow: hidden;
   padding: 2rem;
   border-radius: 0.5rem;
   background: var(--white);
   max-width: 50%;
   height: auto;
   @media screen and (max-width: 1024px) {
      max-width: 90%;
   }
`;

export const ButtonWrap = styled.div`
   display: flex;
   justify-content: center;
   @media screen and (max-width: 375px) {
      flex-direction: column;
   }
`;

export const EmailError = styled.div`
   padding: 0.5rem;
   font-size: 0.9rem;
   font-family: 'Helvetica Neue LT Light',sans-serif;
`;

export const FormOverlay = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 2;
   background: var(--fog);
   position: absolute;
   top: 0;
   left:0;
   width: 100%;
   min-height: 900px;
`;