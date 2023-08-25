import PropTypes from 'prop-types';
// import { Div,Button } from './FeedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
    return (
        <>
            <div>
                {options.map(option => (
                    <button  key={option} onClick={onLeaveFeedBack} value={option}>
                        {option}
                    </button>
                ))}
            </div>
        </>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};