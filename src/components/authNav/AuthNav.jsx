import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <div className={css.link_cont}>
        <NavLink
          to="/register"
          className={navData => (navData.isActive ? css.activeLink : css.link)}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className={navData => (navData.isActive ? css.activeLink : css.link)}
        >
          Sign In
        </NavLink>
      </div>
    </>
  );
};
export default AuthNav;