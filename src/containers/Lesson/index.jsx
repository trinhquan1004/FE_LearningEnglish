import React, { useState, useEffect } from 'react';
import { Grid, CssBaseline } from '@mui/material';
import { getLessons } from '../../apis/lesson';
import { removeToken } from '../../utils/localStorage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';
import LessonItem from '../../components/LessonItem';
import { StyledContainer } from './index.style';

const LessonContainer = () => {
  const [lessons, setLessons] = useState([]);

  const fetchLessons = async () => {
    const { result } = await getLessons();
    const lessonsArray = result.lessons;
    setLessons(lessonsArray);
  };

  const handleLogout = () => {
    removeToken();
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
      <main>
        <Welcome />
        <StyledContainer>
          <Grid container spacing={4}>
            {lessons.map((lesson) => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </Grid>
        </StyledContainer>
      </main>
      <Footer />
    </>
  );
};

export default LessonContainer;
