import React, { useState } from 'react';
import ScorecardForm from './ScorecardForm';


export default function Header() {

    return (
        <header className="header" id="myHeader">
            <div className="header-titlebox">
                <h2>Golf Scorecard</h2>
                {/* <button 
                    className="new-scorecard"
                >
                    Create New Scorecard
                </button> */}
            </div>
        </header>
    )
}
 