import React from 'react';
import { CardContent, Button, Typography, Grid } from '@mui/material';
import {
  StyledCard,
  StyledCardActions,
  StyledTypography,
  StyledCardMedia,
} from './index.style';

const LessonItem = ({ lesson }) => (
  <Grid item xs={12} sm={6} md={4}>
    <StyledCard>
      <StyledCardMedia image={lesson.imageUrl} />
      <CardContent sx={{ flexGrow: 1 }}>
        <StyledTypography className="titleTypo">
          {lesson.title}
        </StyledTypography>
        <Typography>
          This is a beginner&apos;s English lesson about {lesson.title}.
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
        <Button size="small">Add Card</Button>
      </StyledCardActions>
    </StyledCard>
  </Grid>
);

export default LessonItem;
