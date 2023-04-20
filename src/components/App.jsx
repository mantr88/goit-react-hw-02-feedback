import { Component } from "react";

export class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  addNewFeedback = (e) => {
    console.dir(e.target.name);
    switch (e.target.name) {
      case 'good':
       return this.setState(pervState => pervState.good += 0.5);
      case 'neutral':
       return this.setState(pervState => pervState.neutral += 0.5);
      case 'bad':
       return this.setState(pervState => pervState.bad += 0.5);
      default:
        throw new Error(`Unknow button name!`);
    }
  }

  render() {
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'start',
        flexDirection: "column",
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <button type="button" name="good" onClick={this.addNewFeedback}>Good</button>
        <button type="button" name="neutral" onClick={this.addNewFeedback}>Neutral</button>
        <button type="button" name="bad" onClick={this.addNewFeedback}>Bad</button>
      </div>
      <div>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
      </div>
    </div>)
    
  }
};
