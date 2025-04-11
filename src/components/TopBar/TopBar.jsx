import React from "react";
import {TopBarWrapper, TabButton} from "./Topbar.styled";
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {
    const location = useLocation();
    
    return (
        <TopBarWrapper>
            <nav>
                <Link to="/">
                    <TabButton active={location.pathname === '/'}>Новини</TabButton>
                </Link>
                
                <Link to = "/advertisement">
                    <TabButton active={location.pathname === '/advertisement'}>Оголошення</TabButton>
                </Link>
                
                <Link to = "/blog">
                    <TabButton active={location.pathname === '/blog'}>Блог</TabButton>
                </Link>
                
                <Link to = "/pet_stories">
                    <TabButton active={location.pathname === '/pet_stories'}>Pet Stories</TabButton>
                </Link>
            </nav>
        </TopBarWrapper>
    );
};

export default TopBar;
