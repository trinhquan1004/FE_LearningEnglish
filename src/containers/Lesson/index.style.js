import styled from 'styled-components';
import {
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

export const StyledContainer = styled(Container)`
  && {
    min-width: 80%;
    padding-top: 25px;
    padding-bottom: 15px;
  }
`;

export const StyledCard = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.87);
  }
`;

export const StyledCardActions = styled(CardActions)`
  && {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 0px 20px 16px;
    flex-wrap: nowrap;
  }
  && > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  && {
    aspect-ratio: 16/9;
    padding-top: 56.25%;
    cursor: pointer;
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    padding: 10px;
  }
`;

export const StyledTypography = styled(Typography)`
  &&.itemTitle {
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
    color: ${(props) => props.theme.palette.primary.main};
  }
  &&.itemDesc {
    margin: 16px 0px;
    font-size: 18px;
  }
  &&.deleteLessonTypo {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    margin-bottom: 45px;
  }
`;

export const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  }
`;

export const StyledTitleDialog = styled(DialogTitle)`
  &&.title {
    margin-bottom: 24px;
    font-size: 2rem;
    font-weight: bold;
    color: #7ac70c;
  }
`;

export const StyledDialogActions = styled(DialogActions)`
  && {
    justify-content: center;
    display: flex;
    gap: 8px;
    margin: 20px;
    margin-bottom: 50px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    border: 1px solid ${(props) => props.theme.palette.primary.main};
    min-width: 80px;
  }
  &&.ViewBtn {
    min-width: 120px;
    border-radius: 20px;
  }
  &&.customButton {
    min-width: 120px;
    margin: 20px;
    margin-top: 80px;
  }
  &&.containedButton {
    min-width: 120px;
    margin: 20px;
    margin-top: 80px;
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

export const StyledDeleteDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 35%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  }
`;

export const StyledDeleteButton = styled(Button)`
  && {
    min-width: 120px;
    margin: 0 30px 30px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.deleteButton {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
  &&.deleteButton.disabled {
    background-color: #ccc;
    pointer-events: none;
    border: 1px solid #ccc;
  }
`;
