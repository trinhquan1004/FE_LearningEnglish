import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  StyledCard,
  StyledTitleTypography,
  StyledCardMedia,
  StyledCardButton,
  StyledDescTypography,
} from './index.style';

const CardItem = ({ card, onPrevCard, onNextCard, currentIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => setIsFlipped(!isFlipped);

  return (
    <>
      <StyledCardButton
        className="customButton"
        disabled={currentIndex === 0}
        onClick={onPrevCard}
      >
        <ChevronLeftIcon />
      </StyledCardButton>
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
          </>
        )}
        {isFlipped && (
          <StyledDescTypography className="descTypo">
            {card.desc}
          </StyledDescTypography>
        )}
      </StyledCard>
      <StyledCardButton className="customButton" onClick={onNextCard}>
        <ChevronRightIcon />
      </StyledCardButton>
    </>
  );
};

export default CardItem;
