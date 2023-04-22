import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  addNewFeedback = (name) => {
    this.countTotalFeedback();
    switch (name) {
      case 'good':
       return this.setState(pervState => pervState.good += 1);
      case 'neutral':
       return this.setState(pervState => pervState.neutral += 1);
      case 'bad':
       return this.setState(pervState => pervState.bad += 1);
      default:
        throw new Error(`Unknow button name!`);
    }  
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
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
        <Section title={'Please leave feedback!'}>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addNewFeedback} />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ?
          <Notification message='There is no feedback' /> :
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          }
        </Section>  
        </div>
    ) 
  }
};
