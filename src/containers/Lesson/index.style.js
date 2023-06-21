import styled from 'styled-components';
import {
  Dialog,
  Container,
  CardActions,
  CardMedia,
  Card,
  Typography,
} from '@mui/material';

export const StyledDialog = styled(Dialog)`
    & .MuiDialog-paper {
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  },
`;

export const StyledContainer = styled(Container)`
  min-width: 70% !important;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCardMedia = styled(CardMedia)`
  aspect-ratio: 16/9;
  padding-top: 56.25%;
`;

export const StyledTypography = styled(Typography)`
  &&.titleTypo {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
