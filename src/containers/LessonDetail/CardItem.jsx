import React from 'react';
import {
  StyledCard,
  StyledCardActions,
  StyledCardTypography,
  StyledCardMedia,
  StyledCardButton,
} from './index.style';

const CardItem = ({ card }) => (
  <StyledCard className="customCard">
    <StyledCardTypography className="titleTypo">
      {card.name}
    </StyledCardTypography>
    <StyledCardMedia image={card.imageUrl} />
    <StyledCardActions>
      <StyledCardButton className="customButton">Edit</StyledCardButton>
      <StyledCardButton className="customButton">Delete</StyledCardButton>
    </StyledCardActions>
  </StyledCard>
);

export default CardItem;
