import React from 'react';
import { CardContent, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  StyledCard,
  StyledCardActions,
  StyledItemTypography,
  StyledCardMedia,
} from './index.style';

const LessonItem = ({ lesson, onEditLesson, onDeleteLesson }) => {
  const navigate = useNavigate();
  const handleViewLessonDetail = () => navigate(`/lesson/${lesson.id}`);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <StyledCardMedia image={lesson.imageUrl} />
        <CardContent sx={{ flexGrow: 1 }}>
          <StyledItemTypography className="titleTypo">
            {lesson.title}
          </StyledItemTypography>
          <Typography>
            This is a beginner&apos;s English lesson about {lesson.title}.
          </Typography>
        </CardContent>
        <StyledCardActions>
          <Button size="small" onClick={handleViewLessonDetail}>
            View
          </Button>
          <Button size="small" onClick={() => onEditLesson(lesson)}>
            Edit
          </Button>
          <Button size="small" onClick={() => onDeleteLesson(lesson)}>
            Delete
          </Button>
        </StyledCardActions>
      </StyledCard>
    </Grid>
  );
};

export default LessonItem;
