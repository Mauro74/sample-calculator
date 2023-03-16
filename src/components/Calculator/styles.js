import styled from "styled-components";
// import ChartBg from '../../assets/images/chart-bg.svg'

export const Section = styled.div`
   display: grid;
   grid-template-columns: 450px 1fr;

   @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
   }
`;

export const Calc = styled.div`
   height: 800px;
   background: var(--white);
   overflow: auto;
   padding: 2rem 1.5rem;
   overflow: auto;

   @media screen and (max-width: 1024px) {
      height: auto;
      padding: 2rem;
   }
`;

export const ResultOverlay = styled.div`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,0.5);
`;

export const Results = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 40px;
   background: var(--orange);

   @media screen and (max-width: 1024px) {
      padding: 20px;
      text-align: center;
   }

   .donutchart-people {
      transform: translate(160px,200px) scale(0.2);

      @media screen and (max-width: 1024px) {
         transform: translate(250px,0) scale(0.27);
      }
   }

   .donutchart {
      width: 100%;
      // border: solid 1px white;
      @media screen and (max-width: 1024px) {
         width: 80%;
         height: 1000px;
      }
      @media screen and (max-height: 820px) and (max-width: 425px){
         width: 100%;
         height: 500px;
      }

      .donutchart-innertext {
         transform: translate(0,-100px);
         text {
            font-family: 'Helvetica Neue LT Light', sans-serif;
         }
         .donutchart-innertext-value {
            transform: translateY(-40px);
            font-size: 1.4rem;
         }
         .donutchart-innertext-label {
            font-size: 0.9rem;
         }

         @media screen and (max-width: 1024px) {
            transform: translate(77px,-370px) scale(1.2);
         }
      }
      .donutchart-arcs {         
         .donutchart-arcs-path{
            &.selected {
               opacity: 1 !important;
            }
         }
         @media screen and (max-width: 1024px) {
            transform: translate(50px, -240px) scale(1.3);
         }
      }

      .donutchart-legend {
         @media screen and (max-width: 1024px) {
            transform: translate(-500px, 440px);
         }
         g {
            rect {
               height: 60px;
            }
         }

         .donutchart-legend-item {
            &:nth-child(2){
               transform: translate(500px, 70px);
            }
            &:nth-child(3){
               transform: translate(500px, 140px);
            }
            .donutchart-legend-item-rect {
               opacity: 0.8;
               width: 100%;
               &.selected  {
                  opacity: 1 !important;
               }
            }
            .donutchart-legend-item-label {
               position: relative;
               transform: translate(-25px, 18px);
               fill: var(--white);
               font-size: 0.9rem;
               font-family: 'Helvetica Neue LT Light', sans-serif;
               @media screen and (max-width: 1024px) {
                  font-size: 1.4rem;
               }
            }
         }
      }
   }
`;

export const Titles = styled.div`
   display: flex;
   width: 100%;
`;
export const SavingsTitle = styled.div`
   width: 70%;
   text-align: center;
   @media screen and (max-width: 1024px) {
      width: 100%;
   }
   h1 {
      font-size: 4vw;
      margin-bottom: 3rem;
      @media screen and (max-width: 1024px) {
         margin-bottom: 0rem;
         font-size: 7vw;
      }
   }
`;
export const AcumenLogo = styled.div``;

export const Bar = styled.div`
   padding: 40px 30px;
   display: grid;
   grid-template-columns: 420px 1fr;
   border-top: solid 2px var(--orange);

   @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
   }
`;

export const Actions = styled.div`
   text-align: center;
   @media screen and (max-width: 1024px) {
      margin-bottom: 2rem;
   }
`;
export const Download = styled.div`
   text-align: center;

   .dwld-btn {
      display: inline-block;
      color: var(--white);
      background: var(--orange);
      padding: 14px 32px;
      text-align: center;
   }
`;
export const DwldIcon = styled.img`
   width: 20px;
   margin-left: 8px;
`;

// Form
export const FormField = styled.div`
position: relative;
   display: flex;
   flex-direction: column;
   gap: 4px;
   margin: 1.6rem 0;
   input {
      position: relative;
      &:nth-child(2) {
         margin-bottom: 0;
      }
   }
   .curr-input {
      padding: 6px 6px 6px 18px;
   }
   .curr-input + *:after {
      color: var(--grey-medium);
      content: "${props => props.symbol}";
      position: absolute;
      top: -26px;
      left: 8px;     
   }
`;

export const RangeLabels = styled.div`
   display: flex;
   justify-content: space-between;
   color: var(--grey-medium);
`;

export const ErrorLabel = styled.span`
   color: var(--red);
   font-size: 0.9rem;
   font-family: 'Helvetica Neue LT Light', sans-serif;
`;

export const Label = styled.label`
   margin-bottom: 4px;
`;


export const ChartWrapper = styled.div`
   background-color: var(--orange);
   position:relative;
   width: 100%;
   height: 100%;
   svg {
      position: absolute;
   }

   @media screen and (max-width: 425px){
      height: 500px;
      svg {
         left: 0;
         right: 0;
         margin: 0 auto;
      }
   }
   
   @media screen and (min-width: 426px) and (max-width: 1024px) {
      height: 1000px;
      svg {
         left: 0;
         right: 0;
         margin: 0 auto;
      }
   }
   
   
`;

// export const BgWrap = styled.div`
//    border: solid 1px var(--red);
//    @media all and (max-width: 1024px) {
//       position: absolute;
//       left: 0;
//       right: 0;
//       margin: 0 auto;
//       width: 80%;
//       height: 1000px;
//    }
// `;

// export const ChartBG = styled.div`
//    background-image: url(${ChartBg});
//    background-repeat: no-repeat;
//    background-position: center 170px;
//    background-color: var(--white);
//    background-size: 190px;
//    position: absolute;
//    border-radius: 400px;
//    // top: 42px;
//    // left: 42px;
//    width: 416px;
//    height: 416px;

//    @media all and (max-width: 1024px) {
//       position: absolute;
//       left: 0;
//       right: 0;
//       margin: 0 auto;

//    }

// }
// `;