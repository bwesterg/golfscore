import React from 'react';
import ScorecardItem from './ScorecardItem';

export default function ScorecardContainer({scorecards, deleteScorecard, updateScorecard }){

    const showScorecards = () => {

        return scorecards.map(scorecard => <ScorecardItem key={scorecard.id} {...scorecard} updateScorecard={updateScorecard} deleteScorecard={deleteScorecard}/>)
    }

    return (
        <div className="container">
            <ul className="scorecard-list">
                {showScorecards()}
            </ul>
        </div>
    )
}