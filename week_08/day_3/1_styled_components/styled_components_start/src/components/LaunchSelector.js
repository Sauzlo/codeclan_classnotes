import React from 'react';
import colors from '../utilities/cssColors';
import Button from './Button';

const LaunchSelector = ({launchIncrease, launchDecrease}) => {

  return (
    <div>
      <Button onClick={launchDecrease} text={'Previous Launch'} />
      <Button onClick={launchIncrease} text={'Next Launch'} />
    </div>
  )

}

export default LaunchSelector;