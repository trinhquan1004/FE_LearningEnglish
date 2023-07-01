import styled from 'styled-components';
import {
  Container,
  Card,
  CardActions,
  CardMedia,
  Typography,
  Dialog,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

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

export const StyledItemTypography = styled(Typography)`
  &&.titleTypo {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const StyledDialog = styled(Dialog)`
    & .MuiDialog-paper {
    width: 40%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  },
`;

export const StyledDialogActions = styled(DialogActions)`
  &&.customDialogActions {
    justify-content: center;
    display: flex;
    gap: 8px;
    margin-top: 36px;
  }
`;

export const StyledButton = styled(Button)`
  &&.customButton {
    min-width: 120px;
    margin: 20px;
  }
  &&.containedButton {
    min-width: 120px;
    margin: 20px;
    color: ${(props) => props.theme.palette.primary.contrastText};
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const StyledTextField = styled(TextField)`
  &&.customTextField {
    width: 100%;
    padding: 2px;
    margin: 2px;
    border-radius: 4px;
  }
`;

export const StyledDeleteTypography = styled(Typography)`
  &&.customTypo {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const StyledDeleteDialog = styled(Dialog)`
    & .MuiDialog-paper {
    width: 35%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  },
`;

export const StyledDeleteButton = styled(Button)`
  &&.customButton {
    min-width: 120px;
    margin: 10px;
  }
  &&.deleteButton {
    background-color: red;
    color: white;
  }
  &&.deleteButton.disabled {
    background-color: #ccc;
    pointer-events: none;
  }
`;
