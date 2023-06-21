import React from 'react';
import { StyledButton, ButtonGrid } from './index.style';

const CardButtons = ({ onPrevCard, onNextCard, onReturn, currentIndex }) => (
  <ButtonGrid>
    <StyledButton
      onClick={onPrevCard}
      className="customButton"
      disabled={currentIndex === 0}
    >
      Previous
    </StyledButton>
    <StyledButton onClick={onNextCard} className="customButton">
      Next
    </StyledButton>
    <StyledButton className="customButton newButton">Finish</StyledButton>
    <StyledButton className="customButton newButton" onClick={onReturn}>
      Back Lesson
    </StyledButton>
  </ButtonGrid>
);

export default CardButtons;
