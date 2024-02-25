import React, { useState, useEffect } from 'react';
import './style.css';
import AdminPage from './AdminControlPanel';
import BlogPage from './BlogComponent'
import axios from 'axios';
import HeaderContainer from '../../container/HeaderContainer';
import FooterContainer from '../../container/FooterContainer';

const VideoContainer = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [showComponent1, setShowComponent1] = useState(false);

    const handleClick = () => {
        setShowComponent(!showComponent);
    };

    const handleClick2 = () => {
        setShowComponent1(!showComponent1);
    };

    return (
        <div>

            <HeaderContainer />

            <h1 style={{ margin: '20px', backgroundColor: "light", fontSize: "24px" }}>welcome admin</h1>
            <div className='admin-navigator'>
                <button className='mybtn' onClick={handleClick}>Course</button>
                {showComponent && <AdminPage />}
                <br></br>
                <button className='mybtn' onClick={handleClick2}>Blog</button>
                {showComponent1 && <BlogPage />}
            </div>
            <div style={{ margin: '160px' }} ></div>
            <FooterContainer />
        </div>
    )


}

export default VideoContainer;