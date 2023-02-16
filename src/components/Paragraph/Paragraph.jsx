import PropTypes from 'prop-types';
import css from './Paragraph.module.css';

export function Paragraph({ text, number }) {
  return (
    <p>
      {text}
      <span className={css.text}>{number}</span>
      {text === 'Positive feedback:' && <span>%</span>}
    </p>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
