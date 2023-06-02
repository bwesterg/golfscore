// import React, { Component } from 'react';

// const initialState = {
//     course_name: "",
//     tees_name: "",
//     tees_yardage: "",
//     players: [""] 
// };

// export default class ScorecardForm extends Component {
//     state = initialState;

//     handleInputChange = (event) => {
//         let { name, value } = event.target;
//         this.setState({ [name]: value });
//     };

//     handlePlayerChange = (index, event) => {
//         const { value } = event.target;
//         const { players } = this.state;
//         players[index] = value;
//         this.setState({ players });
//     };

//     handleAddPlayer = () => {
//         this.setState((prevState) => ({
//             players: [...prevState.players, ""] // Add another player
//         }));
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { course_name, tees_name, tees_yardage, players } = this.state;
    
//         // Makes array of player objects with score of zero for 18 holes
//         const newPlayers = players.map((player) => {
//         const playerObj = { name: player };

//         for (let i = 1; i <= 18; i++) {
//             const holeKey = `hole${i}_score`;
//             playerObj[holeKey] = 0;
//         }
//             return playerObj;
//         });

//         const newScorecard = {
//             course_name,
//             tees_name,
//             tees_yardage,
//             players: newPlayers
//         };
    
//         // console.log(newScorecard);
//         this.props.addScorecard(newScorecard)
//     };

//     render() {
//         const { course_name, tees_name, tees_yardage, players } = this.state;
//         // console.log(players);
//         return (
//         <form className="scorecard-form" onSubmit={this.handleSubmit}>
//             <h3>Create New Scorecard</h3>
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
//             {players.map((player, index) => (
//                 <input
//                     type="text"
//                     name={`player-${index}`}
//                     value={player}
//                     onChange={(event) => this.handlePlayerChange(index, event)}
//                     key={index}
//                 />
//             ))}
//             <button type="button" onClick={this.handleAddPlayer}>Add Another Player</button>
//             <input type="submit" value="Create Scorecard" />
//         </form>
//         );
//     }
// }
import React, { Component } from 'react';

const initialState = {
  course_name: "",
  tees_name: "",
  tees_yardage: "",
  players: [{ name: "", scores: Array(18).fill(0) }]
};

export default class ScorecardForm extends Component {
  state = initialState;

  handleInputChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlePlayerChange = (index, event) => {
    const { value } = event.target;
    const { players } = this.state;
    players[index].name = value;
    this.setState({ players });
  };

  handleAddPlayer = () => {
    this.setState((prevState) => ({
      players: [...prevState.players, { name: "", scores: Array(18).fill(0) }]
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { course_name, tees_name, tees_yardage, players } = this.state;

    const newScorecard = {
      course_name,
      tees_name,
      tees_yardage,
      players: players.map(({ name, scores }) => ({
        name,
        ...scores.reduce((obj, score, index) => {
          obj[`hole${index + 1}_score`] = score;
          return obj;
        }, {})
      }))
    };

    this.props.addScorecard(newScorecard);
    this.setState(initialState);
  };

  render() {
    const { course_name, tees_name, tees_yardage, players } = this.state;

    return (
      <form className="scorecard-form" onSubmit={this.handleSubmit}>
        <h3>Create New Scorecard</h3>
        <label>Course</label>
        <input
          type="text"
          name="course_name"
          value={course_name}
          onChange={this.handleInputChange}
        />
        <label>Tees</label>
        <input
          type="text"
          name="tees_name"
          value={tees_name}
          onChange={this.handleInputChange}
        />
        <label>Distance (yards)</label>
        <input
          type="number"
          name="tees_yardage"
          value={tees_yardage}
          onChange={this.handleInputChange}
        />
        <label>Players</label>
        {players.map((player, index) => (
          <input
            type="text"
            name={`player-${index}`}
            value={player.name}
            onChange={(event) => this.handlePlayerChange(index, event)}
            key={index}
          />
        ))}
        <button type="button" onClick={this.handleAddPlayer}>Add Another Player</button>
        <input type="submit" value="Create Scorecard" />
      </form>
    );
  }
}

