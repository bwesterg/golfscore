import React from 'react';
import ScorecardItem from './ScorecardItem';
import ScorecardForm from './ScorecardForm';

export default function ScorecardContainer({ scorecards, deleteScorecard, updateScorecard }){

    // const activateForm = () => {
    //     let element = document.getElementById("current-scorecards");
    //     element.classList.add("hidden");
    // }

    const showScorecards = () => {

        return scorecards.map(scorecard => <ScorecardItem key={scorecard.id} {...scorecard} updateScorecard={updateScorecard} deleteScorecard={deleteScorecard}/>)
    }

    return (
        <div className="container" id="current-scorecards">
            <ul className="scorecard-list">
                {showScorecards()}
            </ul>
        </div>
    )
}