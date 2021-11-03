import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback({ good, neutral, bad } = this.state) {
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage({ good } = this.state) {
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = (click) => {
    this.setState((prevState) => {
      return { [click]: prevState[click] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
