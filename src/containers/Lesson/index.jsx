import React, { useState, useEffect } from 'react';
import { Grid, CssBaseline } from '@mui/material';
import { getLessons, createLesson, updateLesson } from '../../apis/lesson';
import { removeToken } from '../../utils/localStorage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';
import LessonItem from '../../components/LessonItem';
import DialogLesson from '../../components/DialogLesson';
import { StyledContainer } from './index.style';

const LessonContainer = () => {
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [openCreate, setOpenCreate] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editImageURL, setEditImageURL] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const fetchLessons = async () => {
    const { result } = await getLessons();
    const lessonsArray = result.lessons;
    setLessons(lessonsArray);
  };

  const handleLogout = () => {
    removeToken();
  };

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleAddLesson = () => {
    handleOpenCreate();
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title && !imageURL) {
      handleCloseCreate();
      return;
    }
    await createLesson(title, imageURL);
    setTitle('');
    setImageURL('');
    fetchLessons();
    handleCloseCreate();
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleEditLesson = (lesson) => {
    setSelectedLesson(lesson);
    setEditTitle(lesson.title);
    setEditImageURL(lesson.imageUrl);
    handleOpenEdit();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!editTitle && !editImageURL) {
      handleCloseEdit();
      return;
    }
    await updateLesson(selectedLesson.id, editTitle, editImageURL);
    setEditTitle('');
    setEditImageURL('');
    fetchLessons();
    handleCloseEdit();
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
      <main>
        <Welcome handleAddLesson={handleAddLesson} />
        <StyledContainer>
          <Grid container spacing={4}>
            {lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                handleEditLesson={handleEditLesson}
              />
            ))}
          </Grid>
        </StyledContainer>
      </main>
      <Footer />
      <>
        <DialogLesson
          titleDialog="Create Lesson"
          open={openCreate}
          onClose={handleCloseCreate}
          title={title}
          imageURL={imageURL}
          handleTitleChange={(e) => setTitle(e.target.value)}
          handleImageURLChange={(e) => setImageURL(e.target.value)}
          handleSubmit={handleCreate}
          nameButton="Add"
        />
        <DialogLesson
          titleDialog="Edit Lesson"
          open={openEdit}
          onClose={handleCloseEdit}
          title={editTitle}
          imageURL={editImageURL}
          handleTitleChange={(e) => setEditTitle(e.target.value)}
          handleImageURLChange={(e) => setEditImageURL(e.target.value)}
          handleSubmit={handleEdit}
          nameButton="Edit"
        />
      </>
    </>
  );
};

export default LessonContainer;
