import React, { Component } from 'react';

const initialState = {
    course_name: "",
    tees_name: "",
    tees_yardage: "",
    players: [{ name: "", scores: Array(18).fill(0) }]
};


export default class ScorecardForm extends Component {
  state = initialState;

    componentDidMount(){
        const {scorecard} = this.props
        if(this.props.scorecard){
            const {course_name, tees_name, tees_yardage, players} = scorecard
            this.setState({
                course_name, 
                tees_name,
                tees_yardage, 
                players
            })
        }
    }


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
        {this.props.scorecard ? <h3>EDIT this Scorecard</h3> : <h3>Create New Scorecard</h3> }
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

