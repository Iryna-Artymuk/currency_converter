import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
  box-sizing: border-box;
 }
 
 body{
    font-family: 'Manrope';
    font-size: 16px;
    font-weight:500;
    margin: 0;
   

background: rgb(228,2,82);
background: linear-gradient(56deg, rgba(228,2,82,1) 0%, rgba(121,9,84,1) 51%);
}

 

main {
  background: inherit;
}
input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul ,li {
  list-style: none;
  padding:0;
  margin:0;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6,
p{
  font-size: inherit;
  font-weight: 500;
margin:0;
}

img {
  max-width: 100%;
  height: auto;
}


 


`;
