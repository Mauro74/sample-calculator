import styled from "styled-components";

export const Section = styled.div`
   padding: 60px 0;
   background-color: var(--gun);
`;
export const Sitemap = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   margin-bottom: 40px;
   @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      text-align: center;
   }
`;

export const MapLink = styled.p`
   font-family: 'Helvetica Neue LT Light', sans-serif;
   font-size: 0.9rem;
`;

export const Bottom = styled.div`
   border-top: solid 2px #ffffff4d;
   padding-top: 20px;
   display: flex;
   justify-content: space-between;
   @media screen and (max-width: 1024px) {
      flex-direction: column;
   }
`;

export const BottomInner = styled.div`
   display: flex;
   flex-direction: column;
   @media screen and (max-width: 1024px) {
      text-align: center;
      flex-direction: column;
   }
`;
export const TandC = styled.div`
   font-family: 'Helvetica Neue LT Light', sans-serif;
   font-size: 0.9rem;
   display: flex;
   gap: 1rem;
   justify-content: space-between;
   margin-bottom: 6px;
   @media screen and (max-width: 1024px) {
      margin-bottom: 2rem;
      flex-direction: column;
      text-align: center;
   }
`;
export const SocialButtons = styled.div`
   display: flex;
   gap: 1rem;
   justify-content: center;
   width: 100%;
`;
export const Social = styled.div`
   display: flex;
   gap: 1.3rem;
   align-items: center;
   a {
      vertical-align: middle;
   }
   @media screen and (max-width: 1024px) {
      margin-top: 2rem;
      flex-direction: column;
      text-align: center;
   }
`;
export const SalesBtn = styled.a`
   transition: all 0.25s ease;
   padding: 11px 26px;
   text-transform: none;
   font-size: 14px;
   border: solid 2px var(--white);
   text-align: center;
   min-width: 150px;
   &:hover {
      background: var(--white);
      color: var(--orange);
   }
`;
