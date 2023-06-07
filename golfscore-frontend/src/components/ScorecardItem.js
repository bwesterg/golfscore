// import React, { useState } from 'react';
// import ScorecardPlayers from './ScorecardPlayers';
// import ScorecardForm from './ScorecardForm';

// export default function ScorecardItem({ id, course_name, tees_name, tees_yardage, players, deleteScorecard, updateScorecard }) {
    
//     const scorecard = {id, course_name, tees_name, tees_yardage, players}
//     //doing this to send, with the scorecard prop, to the ScorecardForm, for the purpose of editing
//     const [isToggled, setIsToggled] = useState(false)
//     const handleClick =  (event) => deleteScorecard(id)
//     const handleToggle = (event) =>setIsToggled(!isToggled) 
//     const scorecardCard = () => (
//         <li className="scorecard-item">
//             <table className="headings-table">
//                 <tbody>
//                     <tr>
//                         <th><h3 className="course-heading">Golf Course: </h3></th>
//                         <th><span className="course-heading2"> {course_name} </span></th>
//                     </tr>
//                     <tr>
//                         <th><h3 className="tee-heading">Tees: </h3></th>
//                         <th><span className="tee-heading2">{tees_name}</span></th>
//                     </tr>
//                     <tr>
//                         <th><h3 className="distance-heading">Distance: </h3></th>
//                         <th><span className="distance-heading2">{tees_yardage} Yards</span></th>
//                     </tr>
//                 </tbody>
//             </table>
//             <table>
//                 <thead>
//                     <tr>
//                         <th className="empty-cell"></th> 
//                         <th colSpan={18} className="holes-heading">Holes</th>
//                     </tr>
//                     <tr>
//                         <th className="player-col">Player(s):</th>
//                         {Array.from({ length: 18 }, (_, index) => (
//                             <th key={index} className="hole-col">
//                                 {index + 1}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {players.map((player) => (
//                         <ScorecardPlayers key={player.id} {...player} />
//                         ))}
//                 </tbody>
//             </table>
//             <button onClick={handleClick} className="delete-button">DELETE</button>
//             <button onClick={handleToggle} className="edit-button">EDIT</button>
//         </li>
//     )

//     return isToggled 
//     ? <ScorecardForm 
//         handleToggle={handleToggle}
//         handleInputChange={updateScorecard} 
//         scorecard={scorecard} /> 
//     : scorecardCard();
// }
import React, { useState } from 'react';

export default function ScorecardItem({ id, course_name, tees_name, tees_yardage, players, deleteScorecard }) {

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
                scores.push(<td key={i}>{player[`hole${i}_score`]}</td>);
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
        const handleToggle = (event) =>setIsToggled(!isToggled)

    return (
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

                <table className="scorecard-grid">
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
    );
}