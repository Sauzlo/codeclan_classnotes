import React from 'react';
import colors from '../utilities/cssColors';


const LaunchDetails = ({launch}) => {

  if (!launch){
    return <p>Loading...</p>
  }

  return (
    <>
      <p>{launch.mission_name}</p>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Year: {launch.launch_year}</p>
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Details of launch: {launch.details}</p>
    </>
  )

}

export default LaunchDetails;