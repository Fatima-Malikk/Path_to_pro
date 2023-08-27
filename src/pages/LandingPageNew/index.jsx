import { useEffect } from 'react'
import "./LandingPage.css";
import ExperienceContainer from '../../components/ExperienceContainer/ExperienceContainer'
import AboutPlatformContainer from '../../components/AboutPlatformContainer/AboutPlatformContainer'
import RiseToTheTopContainer from '../../components/RiseToTheTopContainer/RiseToTheTopContainer'
import MatchesScheduleContainer from '../../components/MatchesScheduleContainer/MatchesScheduleContainer'
import IndividualExcellenceContainer from '../../components/IndividualExcellenceContainer/IndividualExcellenceContainer'
import LatestUpdatesContainer from '../../components/LatestUpdatesContainer/LatestUpdatesContainer';
import MeetBestContainer from '../../components/MeetBestContainer/MeetBestContainer';


const LandingPageNew = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <ExperienceContainer />
            <AboutPlatformContainer />
            <RiseToTheTopContainer />
            <IndividualExcellenceContainer />
            <MatchesScheduleContainer />
            <MeetBestContainer />
            <LatestUpdatesContainer bg={true} op={true} Heading={'LATEST UPDATES'} ShowButton={true} />

        </>
    )
}

export default LandingPageNew