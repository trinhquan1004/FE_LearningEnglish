import React from 'react';
import { StyledBox, StyledTypography, StyledButton } from './index.style';

const Welcome = ({ onAddLesson }) => (
  <StyledBox>
    <StyledTypography className="titleTypo">
      Welcome to the lessons!
    </StyledTypography>
    <StyledTypography>Please select a lesson to study.</StyledTypography>
    <StyledButton onClick={onAddLesson}>Create Lesson</StyledButton>
  </StyledBox>
);

export default Welcome;
