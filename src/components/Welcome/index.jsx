import React from 'react';
import { Container, Button } from '@mui/material';
import {
  StyledBox,
  StyledTypography,
  StyledTypography1,
  StyledStack,
} from './index.style';

const Welcome = () => (
  <StyledBox>
    <Container maxWidth="sm">
      <StyledTypography className="titleTypo">
        Welcome to the lessons!
      </StyledTypography>
      <StyledTypography1 className="paraTypo">
        Please select a lesson to study.
      </StyledTypography1>
      <StyledStack className="customStack">
        <Button variant="contained">Create Lesson</Button>
      </StyledStack>
    </Container>
  </StyledBox>
);

export default Welcome;
