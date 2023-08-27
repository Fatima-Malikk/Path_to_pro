import { Route } from "react-router-dom";
import League from "../pages/League";
import MatchRoom from "../pages/MatchRoom";
import Blog from "../pages/Blog";
import BlogInner from "../pages/BlogInner";
import Teams from "../pages/Teams";
import { LEAGUE, MATCHROOM, BLOGS, BLOGINNER, TEAMS } from "../constants";
// import LandingPageNew from "../pages/LandingPageNew";



/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const privateRoutes = () => (
    <>
        {/* <Route index element={<LandingPage />} /> */}
        {/* <Route path={LEAGUE} element={<League />} />
        <Route path={MATCHROOM} element={<MatchRoom />} />
        <Route path={BLOGS} element={<Blog />} />
        <Route path={BLOGINNER} element={<BlogInner />} />
        <Route path={TEAMS} element={<Teams />} /> */}
    </>

);

// NotFound component for 404 errors

export default privateRoutes;