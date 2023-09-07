import React from 'react';
import styled from 'styled-components';
import colors from '../utilities/cssColors';
import Button from './Button';

const ButtonContainer = styled.div`
  display: flex;
  background: ${colors.midBlue};
  justify-content: space-evenly;
`

const LaunchSelector = ({launchIncrease, launchDecrease}) => {

  return (
    <ButtonContainer>
      <Button onClick={launchDecrease} text={"Previous Launch"} />
      <Button background={colors.paleRed} onClick={launchIncrease} text={"Next Launch"} />
    </ButtonContainer>
  )

}

export default LaunchSelector;