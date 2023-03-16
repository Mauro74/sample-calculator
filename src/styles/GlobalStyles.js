import { createGlobalStyle } from 'styled-components';
import Chevron from '../assets/images/chevron-down-dark.svg';
import reset from './reset.css';
import fonts from './fonts.css';
import burger from './burger.css';

const GlobalStyles = createGlobalStyle`
${reset}
${fonts}
${burger}

:root {
   --white: #ffffff;
   --black: #2d2d2b;
   --grey: #707070;
   --grey-medium: #939598;
   --grey-dark: #333739;
   --grey-light: #dddddd;
   --grey-lighter: #efefef;
   --orange: #e98300;
   --orange-light: #FFB45F;
   --mint: #74c7ad;
   --gun: #406271;
   --sky: #1B75BC;
   --red: #d82222;
   --pink: #f7c3c3;
   --smoke: rgba(0,0,0,0.4);
   --fog: rgba(255,255,255,0.4);
 }

 .white {
    color: var(--white);
 }
 .black {
    color: var(--black);
 }
 .grey {
    color: var(--grey);
 }
 .grey-medium {
    color: var(--grey-medium);
 }
 .grey-dark {
    color: var(--grey-dark);
 }
 .grey-light {
    color: var(--grey-light);
 }
 .grey-lighter {
    color: var(--grey-lighter);
 }
 .orange {
    color: var(--orange);
 }
 .orange-light {
    color: var(--orange-light);
 }
 .mint {
    color: var(--mint);
 }
 .gun {
    color: var(--gun);
 }
 .sky {
    color: var(--sky);
 }
 .red {
    color: var(--red);
 }
 .pink {
    color: var(--pink);
 }
 .bg-pink {
    background: var(--pink);
 }

body {
   font-family: 'Helvetica Neue LT Medium', sans-serif;
   font-size: 18px;
   color: var(--black);
   // background-color: var(--grey);
}

.light {
   font-family: 'Helvetica Neue LT Light', sans-serif;
}

.small {
   font-size: 0.9rem;
}
.smaller {
   font-size: 0.8rem;
}

.no-margin {
   margin: 0;
}

p {
   margin-bottom: 20px;
}

h1 {
   font-size: 3.5rem;
   margin-bottom: 1.5rem;
   &.title {
      font-family: 'Helvetica Neue LT Light', sans-serif;
      margin-bottom: 2.5rem;
   }
}

h2 {
   font-size: 2.8rem;
   margin-bottom: 1.5rem;
}
h3 {
   font-size: 2rem;
   margin-bottom: 1.5rem;
}
h4 {
   font-size: 1.6rem;
   margin-bottom: 1.5rem;
}


// FORM 
input {
   // margin-bottom: 1rem;
   &:nth-child(2) {
      margin-bottom: 0;
   }
}

.input-error {
   background-color: var(--pink) !important;
   color: var(--red) !important;
   border-color: var(--red) !important;
}

label {
   font-size: 0.9rem;
   font-family: 'Helvetica Neue LT Light', sans-serif;
}

input[type=text],input[type=number] {
   padding: 6px;
   border: solid 1px var(--grey-medium);
   color: var(--grey-medium);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


// SELECT STYLE
/* class applies to select element itself, not a wrapper element */

select {
   padding: 6px;
   border: solid 1px var(--grey-medium);
   color: var(--grey-medium);
   width: 100%;
   max-width: 100%; /* useful when width is set to anything other than 100% */
   box-sizing: border-box;
   margin: 0;

   -moz-appearance: none;
   -webkit-appearance: none;
   appearance: none;

   background-image: url(${Chevron});
   background-size: 20px;
   background-repeat: no-repeat;
   background-position: right .7em top 50%;

   & svg {
      fill: var(--black)
   }
  
   /* Hide arrow icon in IE browsers */
   &::-ms-expand {
      display: none;
   }
   /* Hover style */
   &:hover {
      border-color: var(--grey-medium);
   }
   /* Focus style */
   &:focus {
      border-color: var(--grey-medium);
      /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
      box-shadow: 0 0 1px 0 var(--grey-medium);
      box-shadow: 0 0 0 0 -moz-mac-focusring;
      color: var(--grey-medium);
      outline: none;
   }
   
   /* Set options to normal weight */
   & option {
      font-weight:normal;
   }
}



// SLIDER STYLE
input[type=range] {
   height: 22px;
   -webkit-appearance: none;
   width: 100%;
   margin: 0;
 }
 input[type=range]:focus {
   outline: none;
 }
 input[type=range]::-webkit-slider-runnable-track {
   width: 100%;
   height: 2px;
   cursor: pointer;
   animate: 0.2s;
   box-shadow: 0px 0px 0px var(--black);
   background: var(--orange);
   border-radius: 0px;
   border: 0px solid var(--black);
 }
 input[type=range]::-webkit-slider-thumb {
   box-shadow: 0px 0px 0px var(--black);
   border: 0px solid var(--orange);
   height: 16px;
   width: 16px;
   border-radius: 16px;
   background: var(--orange);
   cursor: pointer;
   -webkit-appearance: none;
   margin-top: -7px;
 }
 input[type=range]:focus::-webkit-slider-runnable-track {
   background: var(--orange);
 }
 input[type=range]::-moz-range-track {
   width: 100%;
   height: 2px;
   cursor: pointer;
   animate: 0.2s;
   box-shadow: 0px 0px 0px var(--black);
   background: var(--orange);
   border-radius: 0px;
   border: 0px solid var(--black);
 }
 input[type=range]::-moz-range-thumb {
   box-shadow: 0px 0px 0px var(--black);
   border: 0px solid var(--orange);
   height: 16px;
   width: 16px;
   border-radius: 16px;
   background: var(--orange);
   cursor: pointer;
 }
 input[type=range]::-ms-track {
   width: 100%;
   height: 2px;
   cursor: pointer;
   animate: 0.2s;
   background: transparent;
   border-color: transparent;
   color: transparent;
 }
 input[type=range]::-ms-fill-lower {
   background: var(--orange);
   border: 0px solid var(--black);
   border-radius: 0px;
   box-shadow: 0px 0px 0px var(--black);
 }
 input[type=range]::-ms-fill-upper {
   background: var(--orange);
   border: 0px solid var(--black);
   border-radius: 0px;
   box-shadow: 0px 0px 0px var(--black);
 }
 input[type=range]::-ms-thumb {
   margin-top: 1px;
   box-shadow: 0px 0px 0px var(--black);
   border: 0px solid var(--orange);
   height: 16px;
   width: 16px;
   border-radius: 16px;
   background: var(--orange);
   cursor: pointer;
 }
 input[type=range]:focus::-ms-fill-lower {
   background: var(--orange);
 }
 input[type=range]:focus::-ms-fill-upper {
   background: var(--orange);
 }





`;

export default GlobalStyles;
