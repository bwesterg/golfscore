import React, { useState } from 'react';
import ScorecardForm from './ScorecardForm';


export default function Header() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
        console.log('hello');
    };

    return (
        <header className="header" id="myHeader">
            <div className="header-titlebox">
                <h2>Golf Scorecard</h2>
                <button 
                    className="new-scorecard"
                    onClick={toggleForm}>
                    Create New Scorecard
                </button>
            </div>
            {showForm && <ScorecardForm />}
        </header>
    )
}
