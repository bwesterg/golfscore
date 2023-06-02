import React from 'react';
import ScorecardPlayers from './ScorecardPlayers';

export default function ScorecardItem({ course_name, tees_name, tees_yardage, players }) {
    return (
        <li className="scorecard-item">
            {/* <h3 className="course-heading">Golf Course:<span className="course-heading2"> {course_name} </span></h3>
                
            <h3 className="tee-heading">Tees: <span className="tee-heading2">{tees_name}</span></h3>
            <h3 className="distance-heading">Distance: {tees_yardage} Yards</h3> */}
            <table className="headings-table">
                <tbody>
                    <tr>
                        <th><h3 className="course-heading">Golf Course: </h3></th>
                        <th><span className="course-heading2"> {course_name} </span></th>
                    </tr>
                    <tr>
                        <th><h3 className="tee-heading">Tees: </h3></th>
                        <th><span className="tee-heading2">{tees_name}</span></th>
                    </tr>
                    <tr>
                        <th><h3 className="distance-heading">Distance: </h3></th>
                        <th><span className="distance-heading2">{tees_yardage} Yards</span></th>
                    </tr>
                </tbody>
            </table>
            
            <table>
                <thead>
                    <tr>
                        <th className="empty-cell"></th> 
                        <th colSpan={18} className="holes-heading">Holes</th>
                    </tr>
                    <tr>
                        <th className="player-col">Player(s):</th>
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

