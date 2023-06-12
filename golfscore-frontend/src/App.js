import React, { Component } from 'react';
import './App.css';
import ScorecardContainer from './components/ScorecardContainer';
import ScorecardForm from './components/ScorecardForm';
import Header from './components/Header';
import { postScorecard, patchScorecard, deleteScorecard } from './helpers';
const scorecardUrl = "http://127.0.0.1:3000/scorecards/";


class App extends Component {

  state = {
    scorecards: []
  }

  componentDidMount(){
    this.getScorecards()
  }

  getScorecards = () => {
    fetch(scorecardUrl)
      .then(response=>response.json())
      .then(console.log('test'))
      .then(scorecards=>this.setState({scorecards}))
  }
  // Leaving ^^this^^ fetch in App.js, rather than moving to
  // helpers, b/c it is setting state.  IOW, easier to read.

  addScorecard = (newScorecard) => {
    this.setState({
      scorecards: [...this.state.scorecards, newScorecard]
    })
    postScorecard(newScorecard)
    //fetch in helpers
  }

  updateScorecard = (updatedScorecard) => {
    let scorecards = this.state.scorecards.map(scorecard => scorecard.id === updatedScorecard.id ? updatedScorecard : scorecard)
  
    this.setState({ scorecards })

    patchScorecard(updatedScorecard)
    //fetch in helpers


  }

  deleteScorecard = (id) => {
    let filteredScorecards = this.state.scorecards.filter(scorecard => scorecard.id !== id)
    this.setState({
      scorecards: filteredScorecards
    })

    deleteScorecard(id)
    //fetch in helpers

  }

  render(){
    return (
      <div>
        <Header />
        
        <ScorecardForm submitAction={this.addScorecard}/>
        <ScorecardContainer updateScorecard={this.updateScorecard} deleteScorecard={this.deleteScorecard} scorecards={this.state.scorecards}/>
      </div>
    );
  }
}

export default App;

