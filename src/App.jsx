import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import TopBar from "./components/TopBar/TopBar.jsx";
// import { WtfWrapper } from "./pages/Advertisement/Advertisement.styled.jsx";
import RightSidebar from "./components/RightSidebar/RightSidebar.jsx";

const App = () => {
    return (
        <div className="App">
            <Router>
                <div className="AppRoutes">
                    <AppRoutes />
                </div>
            </Router>
            {/* <RightSidebar /> */}
        </div>
    );
};

export default App;
