import React from 'react';
import ScorecardItem from './ScorecardItem';

export default function ScorecardContainer({ scorecards, deleteScorecard, updateScorecard }){
    console.log(scorecards)
    const showScorecards = () => {
        return scorecards.map(scorecard => <ScorecardItem key={scorecard.id} {...scorecard} updateScorecard={updateScorecard} deleteScorecard={deleteScorecard} />)
    }

    return(
        <ul className="scorecard-list">
            {showScorecards()}
        </ul>
    )
}