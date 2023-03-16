import styled from "styled-components";

export const Section = styled.div`
   position: -webkit-sticky;
   position: sticky;
   top: -48px;
   background: var(--white);
   z-index: 2;
   @media all and (max-width: 1024px) {
      position: static;
   }
`;

export const TopRow = styled.div`
   margin 10px 0;
   @media screen and (max-width: 1024px) {
      display: none;
   }
`;

export const TopMenu = styled.div`
   display: flex;
   justify-content: flex-end;
   span {
      a {
         color: var(--grey-medium);       
         font-weight: 400;
         cursor: pointer;
         font-family: "Helvetica Neue LT Light", sans-serif;
         font-size: 15px;
         margin-left: 40px;
      }
   }
`;
   
export const MainNav = styled.div`   
   padding: 30px 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media all and (max-width: 1024px) {
      padding: 30px;
   }
   @media all and (max-width: 480px) {
      padding: 30px 10px;
   }
`;

export const Logo = styled.img`
   width: 230px;
   @media screen and (max-width: 320px) {
      width: 130px;
   }
`;
export const Nav = styled.nav`
   margin: 20px 0 0 20px;
   width: 610px;
   .item {
      position: relative;
      cursor: pointer;
      height:34px;
      display: inline-flex;
      a.nav-link {
         padding: 0 20px;
         color: var(--black)
      }

      &:before {
         transition: all .25s ease!important;
         background-color: var(--gun);
         content: '';
         display: block;
         position: absolute;
         height: 3px;
         left: 20px;
         right: 20px;
         bottom: -5px;
         height: 3px;
         opacity: 0;
         visibility: hidden;
      }

      &:hover {
         &:before {
            bottom: -11px;
            opacity: 1;
            visibility: visible;
         }
         .sub-nav {
            visibility: visible;
            opacity: 1;
         }
      }
      
   }
   @media screen and (max-width: 1024px) {
      display: none;
   }
`;

export const SubNav = styled.div`
   width: 260px;
   display:flex;
   flex-direction: column;
   box-shadow: 0 0 10px rgb(0 0 0 / 28%);
   position: absolute;
   visibility: hidden;
   opacity: 0;
   top: 34px;
   left: 20px;
   background: var(--white);
   transition: all .25s ease!important;

   div {
      border-bottom: 1px solid #ddd;
      &:last-child {
         border:none;
      }
      a {
         transition: all .25s ease!important;
         color: var(--gun);
         display: block;
         padding: 16px 20px 14px;
         font-size: 12px;
         font-weight: 800;
         line-height: 18px;
         text-transform: uppercase;
         letter-spacing: .3px;

         &:hover {
            background: var(--gun);
            color: var(--white);
         }
      }
   }

   &.wide {
      padding: 28px 0;
      width: 1110px;
      flex-direction: row;
      right: -616px !important;
      left: auto !important;
      div {
         border-bottom: none;
         border-right: solid 1px #ddd;
         &:last-child {
            boredr: none;
         }
      }
   }

`;
export const SubSub = styled.div`
   width: 33.333%;
   padding: 0 14px;
   span {
      font-size: 12px;
      color: var(--gun);
      display: block;
      padding: 16px 20px 14px;
      font-weight: 800;
      line-height: 18px;
      text-transform: uppercase;
   }
   ul li{
      list-style-type: none;
   a {
      font-size: 14px;
      text-transform: none;
      font-family: "Helvetica Neue LT Light", sans-serif;
      color: var(--black);
      &:hover {
         background: var(--white);
         color: var(--black);
      }
   }
}
`;

;export const CtaWrap = styled.div`
   margin: 20px 0 0;
   @media screen and (max-width: 1024px) {
      display: none;
   }
`;

export const Hamburger = styled.div`
   @media screen and (min-width: 1024px) {
      display: none;
   }
`;

export const MobileNavWrap = styled.div`
   display: flex;
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   animation: fadeIn ease 0.2s;

   @keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
`;
   
export const MobileNavInner = styled.div`
   background: var(--white);
   width: 80%;
   height: 100%;
   padding: 2rem;
   overflow: auto;
`;

export const Overlay = styled.div`
   // background: rgba(0,0,0,0.3);
   background: #00000080;
   width: 20%;
   height: 100%;
`;


// Mobile Menu
export const Menu = styled.div`
   .accordion {
      margin-left: 0.5rem;
      .accordion__heading {
         margin: 1.2rem 0;
         .accordion__button {
            display: inline-block;
            cursor: pointer;
            color: var(--gun);
            text-transform: uppercase;
         }
      }
   }
`;

export const SubContainer = styled.div`
   margin-left: 2rem;
`;

export const SubHeader = styled.div`
   color: var(--grey);
`;

export const SubMenu = styled.ul`
   li {
      list-style-type: disc;
      margin: 1.6rem 2rem;
      a {
         display: inline-block;
         color: var(--mint);
         font-size: 1rem;
         font-family: 'Helvetica Neue LT Light', sans-serif;
         &:hover {
            color: var(--orange-light)
         }
      }
   }
`;

export const SecondaryLinks = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem 0 1rem 0.5rem;
   margin: 2rem 0 0;
   border-top: solid 1px var(--grey-light);
   border-bottom: solid 1px var(--grey-light);
   font-size: 0.95rem;
   a {
      font-family: 'Helvetica Neue LT Light', sans-serif;
      margin: 1rem 0;
      color: #939598;
   }
`;