// import React, { Component } from 'react';

// const initialState = {
//     course_name: "",
//     tees_name: "",
//     tees_yardage: "",
//     players: [{ name: "", scores: Array(18).fill(0) }],
// };

// export default class ScorecardForm extends Component {
//     state = initialState;

//         componentDidMount() {
//             const { scorecard } = this.props;
//             if (scorecard) {
//                 const { id, course_name, tees_name, tees_yardage, players } = scorecard;
//                 const updatedPlayers = players.map((player) => {
//                     const scores = Array(18).fill(0);
//                     for (let i = 1; i <= 18; i++) {
//                         const holeKey = `hole${i}_score`;
//                     if (player.hasOwnProperty(holeKey)) {
//                         scores[i - 1] = player[holeKey];
//                     }
//                     }
//                     return { id: player.id, name: player.name, scores };
//                 });
//                 this.setState({
//                     id,
//                     course_name,
//                     tees_name,
//                     tees_yardage,
//                     players: updatedPlayers,
//                 });
//             }
//         }


//     handleInputChange = (event) => {
//         let { name, value } = event.target;
//         this.setState({ [name]: value });
//     };

//     handlePlayerChange = (index, event) => {
//         const { value } = event.target;
//         const { players } = this.state;
//         players[index].name = value;
//         this.setState({ players });
//     };

//     handleScoreChange = (playerIndex, holeIndex, event) => {
//         const { players } = this.state;
//         const updatedPlayers = [...players];
//         updatedPlayers[playerIndex].scores[holeIndex] = parseInt(event.target.value);
//         this.setState({ players: updatedPlayers });
//     };

//     handleAddPlayer = () => {
//         this.setState((prevState) => ({
//         players: [...prevState.players, { name: "", scores: Array(18).fill(0) }]
//         }));
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { course_name, tees_name, tees_yardage, players } = this.state;

//         const newScorecard = {
//         course_name,
//         tees_name,
//         tees_yardage,
//         players: players.map(({ name, scores }) => ({
//             name,
//             ...scores.reduce((obj, score, index) => {
//             obj[`hole${index + 1}_score`] = score;
//             return obj;
//             }, {})
//         }))
//         };

//         this.props.addScorecard(newScorecard);
//         this.setState(initialState);
//     };

//     // showUpdateButton = () => {
//     //     return this.props.todo 
//     //         ? <button className="new-update-button" onClick={this.props.handleToggle}>SAVE UPDATES</button>
//     //         : null
//     // }

    
//     render() {
//         const { course_name, tees_name, tees_yardage, players } = this.state;

//         return (
//         <form
//             className="scorecard-form"
//             onSubmit={this.props.scorecard ? this.handleInputChange : this.handleSubmit}
//         >
//         {this.props.scorecard ? (
//             <h3>EDIT this Scorecard</h3>
//             ) : (
//                 <div>
//                     <h3>Create New Scorecard</h3>
//                     <h5>(initial hole scores default to zero)</h5>
//                 </div>
//             )}
//             <label>Course</label>
//             <input
//                 type="text"
//                 name="course_name"
//                 value={course_name}
//                 onChange={this.handleInputChange}
//             />
//             <label>Tees</label>
//             <input
//                 type="text"
//                 name="tees_name"
//                 value={tees_name}
//                 onChange={this.handleInputChange}
//             />
//             <label>Distance (yards)</label>
//             <input
//                 type="number"
//                 name="tees_yardage"
//                 value={tees_yardage}
//                 onChange={this.handleInputChange}
//             />
//             <label>Players</label>
//             {players.map((player, playerIndex) => (
//             <input
//                 type="text"
//                 name={`player-${playerIndex}`}
//                 value={player.name}
//                 onChange={(event) => this.handlePlayerChange(playerIndex, event)}
//                 key={playerIndex}
//                 />
//             ))}

//             {/* this is where I will show the hole scores if someone is editing a scorecard */}
//             {this.props.scorecard ? (
//                 <div className="hole-score-edit">
//                 <table>
//                     <thead>
//                     <tr>
//                         <th>Player</th>
//                         {Array.from({ length: 18 }, (_, index) => (
//                         <th key={index}>Hole {index + 1} score</th>
//                         ))}
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {players.map((player, playerIndex) => (
//                         <tr key={playerIndex}>
//                         <td>{player.name}</td>
//                         {player.scores.map((score, holeIndex) => (
//                             <td key={holeIndex}>
//                             <input
//                                 type="number"
//                                 className="edit-hole-score"
//                                 value={score}
//                                 onChange={(event) =>
//                                 this.handleScoreChange(playerIndex, holeIndex, event)
//                                 }
//                             />
//                             </td>
//                         ))}
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//                 </div>
//             ) : null}

//             <button type="button" onClick={this.handleAddPlayer}>
//                 Add Another Player
//             </button>
//             {/* {this.showUpdateButton()} */}
//             <input type="submit" />
//             </form>
//         );
//     }

// }

// import React, { Component } from 'react';


//     const initialState = {
//         course_name: "",
//         tees_name: "",
//         tees_yardage: "",
//         players: [],
//     };

// export default class ScorecardForm extends Component {

//     state = initialState
    
//     render() {
//         return (
//             <form>
//                 <h2>Create a New Golf Scorecard</h2>
//                 <label>Course:</label>
//                 <input type="text" name="course_name" />
//                 <label>Tees:</label>
//                 <input type="text" name="tees_name" />
//                 <label>Yardage</label>
//                 <input type="text" name="tees_yardage" />
//                 <label>Players</label>
//                 <input type="text" name="players" />
//                 {players.map((player, playerIndex) => (
//                     <input
//                         type="text"
//                         name={`player-${playerIndex}`}
//                         value={player.name}
//                         onChange={(event) => this.handlePlayerChange(playerIndex, event)}
//                         key={playerIndex}
//                         />
//                 ))}


//             </form>
//         )
//     }
// }

import React, { Component, useState } from 'react';
import ScorecardItem from './ScorecardItem';

    const initialState = {
        course_name: "",
        tees_name: "",
        tees_yardage: "",
        players: [{ 
            name: "", 
            hole1_score: 0, 
            hole2_score: 0,
            hole3_score: 0,
            hole4_score: 0,
            hole5_score: 0,
            hole6_score: 0,
            hole7_score: 0,
            hole8_score: 0,
            hole9_score: 0,
            hole10_score: 0,
            hole11_score: 0,
            hole12_score: 0,
            hole13_score: 0,
            hole14_score: 0,
            hole15_score: 0,
            hole16_score: 0,
            hole17_score: 0,
            hole18_score: 0
        }]
    };



export default class ScorecardForm extends Component {

    state = initialState

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value })
    };

    handleAddPlayer = () => {
        const { players } = this.state;
        const newPlayer = {
          name: "",
          ...Object.fromEntries(
            Array.from({ length: 18 }, (_, index) => [
              `hole${index + 1}_score`,
              0,
            ])
          ),
        };
        players.push(newPlayer);
        this.setState({ players });
      };
      
      

    handleChangePlayer = (event, index) => {
        const { value } = event.target;
        const { players } = this.state;
        players[index].name = value;
        this.setState({ players });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addScorecard(this.state)
    }
    
    render() {
        const {course_name, tees_name, tees_yardage, players} = this.state
        return (
            <form className="scorecard-form" onSubmit={this.handleSubmit}>
                <h2>Create a New Scorecard</h2>
                <label>Course Name</label>
                <input
                    type="text" 
                    name="course_name"
                    value={course_name}
                    onChange={this.handleChange}
                />
                <label>Tees</label>
                <input 
                    type="text" 
                    name="tees_name"
                    value={tees_name}
                    onChange={this.handleChange}
                />
                <label>Yardage</label>
                <input 
                    type="number" 
                    name="tees_yardage"
                    value={tees_yardage}
                    onChange={this.handleChange}
                />
                <div className="add-players">
                    <label>Players</label>
                    {players.map((player, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`player${index}`}
                            value={player.name}
                            onChange={(event) => this.handleChangePlayer(event, index)}
                        />
                    ))}
                </div>
                <button 
                    type="button" 
                    className="add-player-button"
                    onClick={this.handleAddPlayer}
                >
                Add Another Player</button>
                <button type="submit">SUBMIT</button>
            </form>
        );
    }
}
