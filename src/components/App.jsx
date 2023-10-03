import React from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import {Section} from './Section/Section'
import { Notification } from "components/Notification/Notification";
import  {Statistics} from "components/Statistacs/Statistics";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const value = e.target.value;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countPositiveFeedback = () => {
    return Math.round((this.state.good / this.TotalFeedback()) * 100);
  };

  TotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const onFeedbackOptions = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedback();
    const countTotal = this.TotalFeedback();

    return (
      <>
        <Section title="Please leave your feedback here">
          <FeedbackOptions
            options={onFeedbackOptions}
            onLeaveFeedBack={this.handleFeedback}
          />
          {countTotal > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
};
export default App;