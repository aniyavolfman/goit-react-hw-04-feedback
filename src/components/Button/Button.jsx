import PropTypes from 'prop-types';
import css from './Button.module.css';

export function Button({ text, onButton }) {
  return (
    <button className={css.buttonClick} type="button" onClick={onButton} name={text}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButton: PropTypes.func.isRequired,
};
