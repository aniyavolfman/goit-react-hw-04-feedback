import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(el => (<Button key={el} text={el} onButton={onLeaveFeedback} />))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
