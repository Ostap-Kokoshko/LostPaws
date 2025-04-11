import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import AdvertismentPage from "../pages/Advertisement/Advertisement.jsx";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertisement" element={<AdvertismentPage />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/*<Route path="/pet_stories" element={<PetStories />} />*/}
    </Routes>
);

export default AppRoutes;
