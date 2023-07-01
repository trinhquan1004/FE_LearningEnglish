import React, { useState } from 'react';
import {
  StyledCard,
  StyledCardActions,
  StyledTitleTypography,
  StyledCardMedia,
  StyledCardButton,
  StyledDescTypography,
} from './index.style';

const CardItem = ({ card, onPrevCard, onNextCard, currentIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => setIsFlipped(!isFlipped);

  return (
    <StyledCard
      className={`customCard ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      {!isFlipped && (
        <>
          <StyledTitleTypography className="titleTypo">
            {card.name}
          </StyledTitleTypography>
          <StyledCardMedia image={card.imageUrl} />
          <StyledCardActions>
            <StyledCardButton
              className="customButton"
              disabled={currentIndex === 0}
              onClick={onPrevCard}
            >
              Pre
            </StyledCardButton>
            <StyledCardButton className="customButton" onClick={onNextCard}>
              Next
            </StyledCardButton>
          </StyledCardActions>
        </>
      )}
      {isFlipped && (
        <StyledDescTypography className="descTypo">
          {card.desc}
        </StyledDescTypography>
      )}
    </StyledCard>
  );
};

export default CardItem;
