import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import LessonPage from '../pages/Lesson';
import LessonDetailPage from '../pages/LessonDetail';
import { getToken } from '../utils/localStorage';

const AppRouter = () => {
  const token = getToken();

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/lesson" /> : <LoginPage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/lesson"
          element={!token ? <Navigate to="/login" /> : <LessonPage />}
        />
        <Route path="/lesson/:lessonId" element={<LessonDetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
