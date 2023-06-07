// import React, {Component} from 'react';
// import './App.css';
// import ScorecardContainer from './components/ScorecardContainer';
// import ScorecardForm from './components/ScorecardForm';
// const scorecardUrl = "http://127.0.0.1:3000/scorecards";

// class App extends Component {

//   state = {
//     scorecards: []
//   }

//   componentDidMount(){
//     this.getScorecards()
//   }

//   getScorecards = () => {
//     fetch(scorecardUrl)
//       .then(response => response.json())
//       .then(scorecards => this.setState({scorecards}))
//   }

//   addScorecard = (newScorecard) => {
//     this.setState({
//       scorecards: [...this.state.scorecards, newScorecard]
//     })
//     console.log('testing');
//     console.log(newScorecard)

//     fetch(scorecardUrl, {
//       method: "Post",
//       headers: {
//         "Content-Type": "application/JSON"
//       },
//       body: JSON.stringify(newScorecard)
//     })
//   }

//   updateScorecard = (updatedScorecard) => {
//     let scorecards = this.state.scorecards.map(scorecard => scorecard.id === updatedScorecard.id ? updatedScorecard : scorecard )

//     this.setState({ scorecards })

//     fetch(scorecardUrl + "/" + updatedScorecard.id, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/JSON"
//       },
//       body: JSON.stringify({scorecard: updatedScorecard})
//     })
//   }

//   deleteScorecard = (id) => {
//     let filtered = this.state.scorecards.filter(scorecard => scorecard.id !== id)
//     this.setState({
//       scorecards: filtered
//     })

//     fetch(scorecardUrl + "/" + id, {method: "DELETE"} )
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Golf Scorecard Collection</h1>
//         <ScorecardForm addScorecard={this.addScorecard}/>
//         <ScorecardContainer  updateScorecard={this.updateScorecard} deleteScorecard={this.deleteScorecard} scorecards={this.state.scorecards} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
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
      .then(response=>response.json())
      .then(console.log('test'))
      .then(scorecards=>this.setState({scorecards}))
  }

  addScorecard = (newScorecard) => {
    this.setState({
      scorecards: [...this.state.scorecards, newScorecard]
    })

    fetch(scorecardUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newScorecard)
    })
  }

  updateScorecard = (updatedScorecard) => {
    let scorecards = this.state.scorecards.map(scorecard => scorecard.id === updatedScorecard.id ? updatedScorecard : scorecard)
  
    this.setState({ scorecards })

    fetch(scorecardUrl + "/" + updatedScorecard.id,  {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedScorecard)
    })
  }

  deleteScorecard = (id) => {
    let filteredScorecards = this.state.scorecards.filter(scorecard => scorecard.id !== id)
    this.setState({
      scorecards: filteredScorecards
    })

    fetch(scorecardUrl + "/" + id, {method: "DELETE"} )
  }


  render(){
    return (
      <div>
        <h1>Golf Scorecard App</h1>
        <ScorecardForm submitAction={this.addScorecard}/>
        <ScorecardContainer updateScorecard={this.updateScorecard} deleteScorecard={this.deleteScorecard} scorecards={this.state.scorecards}/>
      </div>
    );
  }
}

export default App;

