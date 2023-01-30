import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <nav className={css.nav_cont}>
        <NavLink
          to="/"
          className={navData => (navData.isActive ? css.activeLink : css.link)}
        >
          Home page
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={navData =>
              navData.isActive ? css.activeLink : css.link
            }
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
};
export default Navigation;