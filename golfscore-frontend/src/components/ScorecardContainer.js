import React from 'react';
import ScorecardItem from './ScorecardItem';

export default function ScorecardContainer({scorecards}){
    console.log(scorecards)
    const showScorecards = () => {
        return scorecards.map(scorecard => <ScorecardItem key={scorecard.id} {...scorecard} />)
    }

    return(
        <ul className="scorecard-list">
            {showScorecards()}
        </ul>
    )
}