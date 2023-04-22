import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>{
        options.map(option => (
          <button
            type="button"
            name={option}
            key={option}
            onClick={() => onLeaveFeedback(option)}>{option}
          </button>
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