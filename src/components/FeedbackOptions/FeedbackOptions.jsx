import PropTypes from 'prop-types';
import { Div,Button } from './FeedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
    return (
        <>
            <Div>
                {options.map(option => (
                    <Button  key={option} onClick={onLeaveFeedBack} value={option}>
                        {option}
                    </Button>
                ))}
            </Div>
        </>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};