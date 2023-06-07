import React, { useState } from 'react';
import ScorecardForm from './ScorecardForm';

export default function ScorecardItem({ id, course_name, tees_name, tees_yardage, players, updateScorecard, deleteScorecard }) {

    const scorecard = {id, course_name, tees_name, tees_yardage, players }
    //^^^ Above is "un"-destructuring main parts of scorecard to send as 
    //props to ScorecardForm, if conditional is triggered to edit a scorecard.

    const renderHeadings = () => {
        const headings = [];
        for (let i = 1; i <= 18; i++) {
            headings.push(<th key={i}>{i}</th>);
            }
            return headings;
        };

        const renderPlayerScores = () => {
            return players.map(player => {
            const scores = [];
            for (let i = 1; i <= 18; i++) {
                scores.push(<td className="static-score" key={i}>{player[`hole${i}_score`]}</td>);
            }
            return (
                <tr key={player.id}>
                    <td>{player.name}</td>
                {scores}
                </tr>
            );
            });
        };

        const [isToggled, setIsToggled] = useState(false)
        const handleClick = (event) => deleteScorecard(id)
        const handleToggle = (event) => setIsToggled(!isToggled)
        const scorecardCard = () => (
            <li>
                <div className="scorecard-item">

                    <div className="scorecard-heading">
                        <div>
                            <h5>Course: {course_name}</h5>
                        </div>
                        <div>
                            <h5>Tees: {tees_name}</h5>
                        </div>
                        <div>
                            <h5>Yards: {tees_yardage}</h5>
                        </div>
                    </div>
                    <table className="scorecard-grid-static">
                        <thead>   
                            <tr>
                                <th>Player</th>
                                {renderHeadings()}
                            </tr>
                        </thead>
                        <tbody>
                            {renderPlayerScores()}
                        </tbody>
                    </table>
                    <button onClick={handleClick} className="delete-button">DELETE Scorecard</button>
                    <button onClick={handleToggle} className="edit-button">EDIT Scorecard</button>
                </div>
            </li>
        )

    return isToggled 
        ? <ScorecardForm 
            handleToggle={handleToggle} 
            submitAction={updateScorecard} 
            scorecard={scorecard}/> 
        : scorecardCard();
}