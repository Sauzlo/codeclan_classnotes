import React, {useState, useEffect} from 'react';
import LaunchSelector from '../components/LaunchSelector';
import LaunchDetails from '../components/LaunchDetails';
import Header from '../components/Header';

const LaunchContainer = () => {

  const [launch, setLaunch] = useState(null);
  const [selectedLaunchId, setSelectedLaunchId] = useState(1);

  useEffect(() => {

    const getLaunch = async () => {
      const launchResponse = await fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)
      const launchData = await launchResponse.json()
      setLaunch(launchData)
    }

    getLaunch();

  }, [selectedLaunchId]);

  const increaseSelectedLaunch = () => {
    const nextLaunchIndex = selectedLaunchId + 1;
    if (nextLaunchIndex <= 110){
      setSelectedLaunchId(nextLaunchIndex);
    }
  }

  const decreaseSelectedLaunch = () => {
    const nextLaunchIndex = selectedLaunchId - 1;
    if (nextLaunchIndex >= 1){
      setSelectedLaunchId(nextLaunchIndex);
    }
  }

  return (
    <>
      <Header text={'SpaceX Launch Details'}/>
      <LaunchSelector 
        launchIncrease={increaseSelectedLaunch}
        launchDecrease={decreaseSelectedLaunch}
      />
      <LaunchDetails 
        launch={launch}
      />
    </>
  )

}

export default LaunchContainer;