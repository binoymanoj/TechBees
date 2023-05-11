import React from 'react';
import "./pagenotfound.css";
import Lottie from "lottie-react";
import page_not_found from './page_not_found.json';

const Pagenotfound = () => {
    return (
        <div className='error404'>
            <div className='animation404'>
                <Lottie loop={true} animationData={page_not_found} className='pagenotfound' />
            </div>
            {/* <div className='returnhome'>
                <h2>Return Home</h2>
            </div> */}

        </div>

    )
}

export default Pagenotfound