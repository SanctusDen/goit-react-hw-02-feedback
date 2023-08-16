// import React from "react";
// import { FeedbackOption } from 'components/FeedbackOptions/FeedbackOptions';
// import { Section } from '../Section/Section';
// import { Notification } from "components/Notification/Notification";
// import { Statistics } from "components/Statistacs/Statistics";

// class Feedback extends React.Component{
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };
    

//     // handleFeedback = e => {
//     //     this.setState((prevState) => {
//     //         return {
//     //             [option]: prevState[option] + 1,
//     //         };
//     //     });
//     // };
    
//     onLeaveFeedback = (evt) => {
      
//     };
    
//     countPositiveFeedback = () => {
//         return Math.round((this.state.good / this.TotalFeedback()) * 100)
//     }
    
    
//     TotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         const total = good + neutral + bad;
//         return total;
//     };

//     render() {
//         const { good, neutral, bad } = this.state;
//         const onFeedbackOptions = Object.keys(this.state);
//         const positivePercentage = this.countPositiveFeedback();
//         const countTotal = this.TotalFeedback();
        
//     return (
//       <>
//         <Section title="Please leave your feedback here">
//         <FeedbackOption options={onFeedbackOptions} onLeaveFeedBack={this.onLeaveFeedback} />
//         {countTotal > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotal} positivePercentage={positivePercentage} />) : 
//           (<Notification message="There is no feedback" />)
//         }
//         </Section>
//       </>
//     );
//   }
// }

// export default Feedback;