import PropTypes from 'prop-types';
// import { Div,Button } from './FeedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <div>
                {options.map(option => (
                    <button  key={option} onClick={onLeaveFeedback}>
                        {option}
                    </button>
                ))}
            </div>
        </>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};