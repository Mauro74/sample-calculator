import styled from "styled-components";

export const Section = styled.div`
   padding: 30px 0 30px;
   background-color: var(--grey-dark);

   @media all and (max-width: 1024px) {
      h1, h3 {
         text-align: center;
      }
   }
`;

export const Intro = styled.p`
   font-size: 1.3rem;
   @media all and (max-width: 1024px) {
      text-align: center;
   }
`;

export const Box = styled.div`
   border: solid 3px var(--orange);
   margin-top: 40px;
   padding: 30px 20px 20px;

   * {
      font-size: 1.3rem;
   }

   ol {
      margin-left: 20px;
      li {
         margin-bottom: 10px;
      }
   }
`;

export const BottomBox = styled.div`
   padding: 80px 40px 0;
   display: flex;
   justify-content: space-between;
   @media all and (max-width: 1024px) {
      flex-direction: column;
   }
`;

export const Actions = styled.div`
   width: 25%;
   text-align: center;
   @media all and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
   }
`;

export const AcuLogo = styled.img`
   width: 230px;
   margin-bottom: 60px;
   @media all and (max-width: 768px) {
      width: auto;
      padding: 0 10%;
   }
   @media all and (max-width: 1024px) {
      width: auto;
      padding: 0 20%;
   }
`;

export const Image = styled.div`
   width: 75%;
   text-align: right;
   @media all and (max-width: 768px) {
      display: none;
   }
   @media all and (max-width: 1024px) {
      margin-top: 4rem;
   }
`;

export const UserCta = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
   @media all and (max-width: 1024px) {
      justify-content: center;
   }
`;

export const Chevron = styled.div`
   margin-top: 80px;
   cursor: pointer;
   img {
      width: 80px;
      transition: all 0.25s ease;
   }
   &:hover {
      img {
         transform: translateY(6px);
      }
   }
`;