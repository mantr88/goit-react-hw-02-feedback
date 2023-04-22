import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>{
        options.map(option => (
          <Button
            type="button"
            name={option}
            key={option}
            onClick={() => onLeaveFeedback(option)}>{option}
          </Button>
      )) 
      }
      </div> 
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}