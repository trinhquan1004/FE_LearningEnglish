import React, { useContext } from 'react';
import { AuthContext } from '../../checkAdminContext';
import { StyledButton, ButtonGrid } from './index.style';

const CardButtons = ({
  card,
  onEditCard,
  onDeleteCard,
  onReturn,
  onFinish,
}) => {
  const isAdmin = useContext(AuthContext);

  return (
    <ButtonGrid>
      {isAdmin && (
        <>
          <StyledButton onClick={() => onEditCard(card)}>Edit</StyledButton>
          <StyledButton onClick={() => onDeleteCard(card)}>Delete</StyledButton>
        </>
      )}
      <StyledButton className="containedButton" onClick={onFinish}>
        Finish
      </StyledButton>
      <StyledButton className="containedButton" onClick={onReturn}>
        Back Lesson
      </StyledButton>
    </ButtonGrid>
  );
};
export default CardButtons;
