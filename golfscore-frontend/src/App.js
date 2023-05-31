import React, {Component} from 'react';
import './App.css';
import ScorecardContainer from './components/ScorecardContainer';
import ScorecardForm from './components/ScorecardForm';
const scorecardUrl = "http://127.0.0.1:3000/scorecards";

class App extends Component {

  state = {
    scorecards: []
  }

  componentDidMount(){
    this.getScorecards()
  }

  getScorecards = () => {
    fetch(scorecardUrl)
      .then(response => response.json())
      .then(scorecards => this.setState({scorecards}))
    }

  addScorecard = (newScorecard) => {
    this.setState({
      scorecards: [...this.state.scorecards, newScorecard]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Golf Scorecard Collection</h1>
        <ScorecardForm addScorecard={this.addScorecard}/>
        <ScorecardContainer scorecards={this.state.scorecards} />
      </div>
    );
  }
}

export default App;
