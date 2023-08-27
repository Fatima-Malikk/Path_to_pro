import { BrowserRouter, Routes, Route } from "react-router-dom";
import privateRoutes from "./privateRoutes"
import publicRoutes from "./publicRoutes";
import ResponsiveAppBar from "../components/header";
import { getWithExpiry } from '../utils/localStorage';
import Login from "../pages/Login/login";
import { NotFound } from '../pages/NotFound'
import Footer from "../components/Footer";
import StayConnectedContainer from "../components/StayConnectedContainer/StayConnectedContainer";



const isLoggedIn = getWithExpiry('isLoggedIn')
const _public = publicRoutes();
const _private = privateRoutes();

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const _Routes = () => (
    <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
            {/* {isLoggedIn} ?{_private}:null
            {_public} */}
            {isLoggedIn ? _private : null}
            {_public}
            <Route path="*" element={<Login />} />
        </Routes>
        <StayConnectedContainer/>
        <Footer />
    </BrowserRouter>
    
);

export default _Routes;