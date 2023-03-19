import PropTypes from 'prop-types';
import css from '../CardList/CardList.module.css';
import avatar from '../images/avatar.png';


export function CardList({ currentState, followersCounter, toggleCounterState }) {
  return (
    <div className={css.cardBox}>
      <ul className={css.cardList}>
        <li className={css.cardItem}>
        <img
          src={avatar}
          alt="avatar"
          className={css.avatar}
          />
          <div className={css.cardInfoBox}>
          <p className={css.cardContent}>777</p>
          <p className={css.cardContent}>tweets</p>
          </div>
          <div className={css.cardInfoBox}>
          <p className={css.cardContent}>{Intl.NumberFormat('en-EN').format(followersCounter)}</p>
          <p className={css.cardContent}>followers</p>
          </div>
        </li>
      </ul>
      <button
        type="submit"
        className={
          currentState ? [css.btnSubmit, css.active].join(' ') : css.btnSubmit
        }
        onClick={toggleCounterState}
      >
        {currentState ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
}

CardList.propTypes = {
    toggleCounterState: PropTypes.func.isRequired,
    currentState: PropTypes.object.isRequired,
    followersCounter: PropTypes.number,
};
