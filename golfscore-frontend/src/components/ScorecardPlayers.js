import React from 'react';

export default function ScorecardPlayers({ name, hole1_score, hole2_score, hole3_score, hole4_score, hole5_score, hole6_score, hole7_score, hole8_score, hole9_score, hole10_score, hole11_score, hole12_score, hole13_score, hole14_score, hole15_score, hole16_score, hole17_score, hole18_score }) {
    
    return (
        <tr>
            <td className="player-name-col">{name}</td>
            <td className="score-col">{hole1_score}</td>
            <td className="score-col">{hole2_score}</td>
            <td className="score-col">{hole3_score}</td>
            <td className="score-col">{hole4_score}</td>
            <td className="score-col">{hole5_score}</td>
            <td className="score-col">{hole6_score}</td>
            <td className="score-col">{hole7_score}</td>
            <td className="score-col">{hole8_score}</td>
            <td className="score-col">{hole9_score}</td>
            <td className="score-col">{hole10_score}</td>
            <td className="score-col">{hole11_score}</td>
            <td className="score-col">{hole12_score}</td>
            <td className="score-col">{hole13_score}</td>
            <td className="score-col">{hole14_score}</td>
            <td className="score-col">{hole15_score}</td>
            <td className="score-col">{hole16_score}</td>
            <td className="score-col">{hole17_score}</td>
            <td className="score-col">{hole18_score}</td>
        </tr>

        
    );
}

