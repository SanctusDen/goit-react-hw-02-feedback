
import PropTypes from 'prop-types';
import { btns, wrapperBtns } from './FeedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <wrapperBtns>
                {options.map(option => (
                    <btns key={option} onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </btns>
                ))}
            </wrapperBtns>
        </>
    
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};