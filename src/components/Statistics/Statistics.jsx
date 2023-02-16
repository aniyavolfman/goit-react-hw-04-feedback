import PropTypes from 'prop-types';
import { Paragraph } from '../Paragraph/Paragraph';
import { Notification } from '../Notification/Notification';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    (good || neutral || bad) ? (
    <>
      <Paragraph text="Good:" number={good} />
      <Paragraph text="Neutral:" number={neutral} />
      <Paragraph text="Bad:" number={bad} />
      <Paragraph text="Total:" number={total} />
      <Paragraph
        text="Positive feedback:"
        number={positivePercentage}
      />
    </>
    ) : <Notification message="There is no feedback!" />
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};