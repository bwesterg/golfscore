import React, { useState } from 'react';
import ScorecardPlayers from './ScorecardPlayers';
import ScorecardForm from './ScorecardForm';

export default function ScorecardItem({ id, course_name, tees_name, tees_yardage, players, deleteScorecard}) {
    
    const scorecard = {id, course_name, tees_name, tees_yardage, players}
    //doing this to send, with the scorecard prop, to the ScorecardForm, for the purpose of editing
    const [isToggled, setIsToggled] = useState(false)
    const handleClick =  (event) => deleteScorecard(id)
    const handleToggle = (event) =>setIsToggled(!isToggled) 
    const scorecardCard = () => (
        <li className="scorecard-item">
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
            <button onClick={handleClick} className="delete-button">DELETE</button>
            <button onClick={handleToggle} className="edit-button">EDIT</button>
        </li>
    )

    return isToggled ? <ScorecardForm scorecard={scorecard} /> : scorecardCard();
}

