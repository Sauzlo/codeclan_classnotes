import React from "react";
import styled from "styled-components";
import colors from "../utilities/cssColors";

const Title = styled.h1`
  text-align: center; 
  font-size: 1.5em;
  color: ${colors.white};
  background-color: ${colors.darkBlue};
  margin: 0;
  padding: 1em;
`

const Header = ({text}) => {
  return ( 
    <Title>{text}</Title>
   );
}
 
export default Header;