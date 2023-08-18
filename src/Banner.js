import React from 'react';
import './Banner.css';

function Banner() {

    function truncate(text, n) {
        return text?.length > n ? text.substr(0, n - 1) + '...' : text;
    }

    return ( 
        <header 
            className='banner' 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(
                        `This is a test description
                        This is a test description
                        This is a test description
                        This is a test description
                        This is a test description
                        This is a test description
                        This is a test description
                        This is a test description
                        This is a test description
                        This is a test description
                        This is a test description`, 
                        150)
                    }
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;