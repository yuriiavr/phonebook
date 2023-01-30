import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import css from '../UserMenu/UserMenu.module.css';

export default function UserMenu({ email }) {
  const dispatch = useDispatch();
  return (
    <div>
      <a href="mailto: {email}" className={css.email}>
        {email}
      </a>
      <button className={css.logout_btn} type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}