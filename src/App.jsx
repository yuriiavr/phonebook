import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { lazy } from 'react';
import AppBar from './components/AppBar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import { authSelectors } from 'redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() => import('components/HomePage'));
const ContactsPage = lazy(() => import('./components/ContactsPage'));
const NotFoundPage = lazy(() => import('components/NotFoundPage'));
const SignUp = lazy(() => import('components/SignUp'));
const SignIn = lazy(() => import('components/SignIn'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute>
              <NotFoundPage />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
}