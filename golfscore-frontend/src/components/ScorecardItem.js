import React from 'react';
import ScorecardPlayers from './ScorecardPlayers';

export default function ScorecardItem({ course_name, tees_name, tees_yardage, players }) {
    return (
        <li className="scorecard-item">
        <h3 className="course-heading">Course: {course_name}</h3>
        <h3 className="tee-heading">Tees: {tees_name}</h3>
        <h3 className="distance-heading">Distance: {tees_yardage} Yards</h3>
        <table>
            <thead>
            <tr>
                <th></th> {/* Empty cell for player column */}
                <th colSpan={18} className="holes-heading">
                Holes
                </th>
            </tr>
            <tr>
                <th className="player-col">Player</th>
                {Array.from({ length: 18 }, (_, index) => (
                <th key={index} className="hole-col">
                    {index + 1}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {players.map((player) => (
                <ScorecardPlayers key={player.id} {...player} />
            ))}
            </tbody>
        </table>
        </li>
    );
}

