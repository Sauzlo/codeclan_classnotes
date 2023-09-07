import React from 'react';
import styled from 'styled-components';
import colors from '../utilities/cssColors';

const Paragraph = styled.p`
  margin: 0;
  padding: 1em;
  background-color: ${colors.grey};
  color: ${colors.darkBlue};
`

const BigParagraph = styled(Paragraph)`
  font-size: 1.5em;
  padding: .5em;
  border-bottom: 1px solid ${colors.darkBlue};
`

const LaunchDetails = ({launch}) => {

  if (!launch){
    return <p>Loading...</p>
  }

  return (
    <>
      <BigParagraph>{launch.mission_name}</BigParagraph>
      <Paragraph>Flight Number: {launch.flight_number}</Paragraph>
      <Paragraph>Year: {launch.launch_year}</Paragraph>
      <Paragraph>Rocket: {launch.rocket.rocket_name}</Paragraph>
      <Paragraph>Details of launch: {launch.details}</Paragraph> 
    </>
  )



}

export default LaunchDetails;