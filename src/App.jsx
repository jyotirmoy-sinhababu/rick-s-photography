import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import ProfilePage from './pages/profilepage/ProfilePage';

import { useSelector } from 'react-redux';

function App() {
  const authUser = useSelector((state) => state.auth.user);
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={authUser ? <ProfilePage /> : <Navigate to='auth' />}
        />
        <Route
          path='/auth'
          element={!authUser ? <AuthPage /> : <Navigate to='/' />}
        />
      </Routes>
    </>
  );
}

export default App;
