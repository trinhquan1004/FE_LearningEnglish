import styled from 'styled-components';
import { Card, CardActions, Typography, CardMedia } from '@mui/material';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px !important;
  padding: 10px !important;
`;

export const StyledTypography = styled(Typography)`
  &&.titleTypo {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  aspect-ratio: 16/9;
  padding-top: 56.25%;
`;
