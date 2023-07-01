import React from 'react';
import { StyledButton, ButtonGrid } from './index.style';

const CardButtons = ({
  card,
  onEditCard,
  onDeleteCard,
  onReturn,
  onFinish,
}) => (
  <ButtonGrid>
    <StyledButton onClick={() => onEditCard(card)} className="customButton">
      Edit
    </StyledButton>
    <StyledButton onClick={() => onDeleteCard(card)} className="customButton">
      Delete
    </StyledButton>
    <StyledButton className="containedButton" onClick={onFinish}>
      Finish
    </StyledButton>
    <StyledButton className="containedButton" onClick={onReturn}>
      Back Lesson
    </StyledButton>
  </ButtonGrid>
);

export default CardButtons;
