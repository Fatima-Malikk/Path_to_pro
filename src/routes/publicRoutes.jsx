import { Route } from "react-router-dom";
import Login from "../pages/Login/login";
import SignUp from "../pages/SignUp/signup";
import About from "../pages/About";
import League from "../pages/League";
import MatchRoom from "../pages/MatchRoom";
import Blog from "../pages/Blog";
import Events from "../pages/Events"
import BlogInner from "../pages/BlogInner";
import Teams from "../pages/Teams";
import { SIGN_IN, SIGN_UP, ABOUT, LEAGUE, MATCHROOM, BLOGS, BLOGINNER, TEAMS, EVENTS, PROFILE } from "../constants";
import LandingPageNew from "../pages/LandingPageNew";
import Profile from "../pages/Profile";
/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const publicRoutes = () => (
    <>
        <Route index element={<LandingPageNew />} />
        
        <Route path={SIGN_IN} element={<Login />} />
        <Route path={SIGN_UP} element={<SignUp />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={LEAGUE} element={<League />} />
        <Route path={MATCHROOM} element={<MatchRoom />} />
        <Route path={BLOGS} element={<Blog />} />
        <Route path={EVENTS} element={<Events/>}/> 
        <Route path={PROFILE} element={<Profile />} />
        <Route path={BLOGINNER} element={<BlogInner />} />
        <Route path={TEAMS} element={<Teams />} />
    </>
);


export default publicRoutes;