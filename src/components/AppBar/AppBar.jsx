import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import css from './AppBar.module.css';
import AuthNav from 'components/authNav';
import authSelectors from '../../redux/auth/authSelectors';
import { Suspense } from 'react';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getEmail);
  return (
    <>
      <Container>
        <header className={css.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu email={email} /> : <AuthNav />}
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
}