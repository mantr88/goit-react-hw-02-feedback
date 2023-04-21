export const FeedbackOptions = ({options, onLeaveFeedback}) => {
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