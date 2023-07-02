import styled from 'styled-components';
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
} from '@mui/material';

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBox = styled(Box)`
  padding-top: 64px;
  padding-bottom: 48px;
  background-color: ${(props) => props.theme.palette.background.paper};
`;

export const StyledTypography = styled(Typography)`
  &&.titleTypo {
    font-size: 3.5rem;
    text-align: center;
    color: ${(props) => props.theme.palette.text.primary};
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
  &&.customTypo {
    width: 150px;
    height: 40px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #7ac70c;
    margin-bottom: 0.5rem;
    flex-shrink: 0;
  }
`;

export const StyledStack = styled(Stack)`
  &&.customStack {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
`;

export const StyledButton = styled(Button)`
  &&.customButton {
    margin: 8px;
    color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.containedButton {
    margin: 8px;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
`;

export const ButtonGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding-top: 30px;
  margin: 0 auto;
  place-content: center;
`;

export const StyledCard = styled(Card)`
  &&.customCard {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 350px;
    border-radius: 10px;
    background-color: #98f5ff;
    box-shadow: 0px 0px 5px ${(props) => props.theme.palette.primary.main};
    transition: transform 0.2s;
    transform-style: preserve-3d;
    cursor: pointer;
    &.flipped {
      transform: rotateY(180deg);
    }
  }
`;

export const StyledTitleTypography = styled(Typography)`
  &&.titleTypo {
    display: flex;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 3.5rem;
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const StyledDescTypography = styled(Typography)`
  &&.descTypo {
    padding: 10px;
    font-size: 3rem;
    color: black;
    transform: rotateY(180deg);
    white-space: pre-wrap;
    word-break: break-word;
    width: 320px;
    text-align: center;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  display: flex;
  justify-content: center;
  width: 65%;
  padding-top: 65%;
  margin-bottom: 10%;
`;

export const StyledCardButton = styled(Button)`
  &&.customButton {
    width: 80px;
    margin: 10px;
    color: ${(props) => props.theme.palette.primary.main};
    background-color: #ffff;
    font-size: 100px;
  }
  .MuiSvgIcon-root {
    font-size: 64px;
  }
`;

export const StyledTitleDialog = styled(DialogTitle)`
  &&.title {
    margin-bottom: 28px;
    font-size: 2rem;
    font-weight: bold;
    color: #7ac70c;
  }
`;

export const StyledDeleteTypography = styled(Typography)`
  &&.customTypo {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    margin-bottom: 45px;
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
  },
`;

export const StyledDialogActions = styled(DialogActions)`
  &&.customDialogActions {
    justify-content: center;
    display: flex;
    gap: 8px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const StyledDeleteButton = styled(Button)`
  &&.customButton {
    min-width: 120px;
    margin: 20px;
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

export const StyledAddDialog = styled(Dialog)`
    & .MuiDialog-paper {
    width: 40%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  },
`;

export const StyledAddButton = styled(Button)`
  &&.customButton {
    min-width: 120px;
    margin: 20px;
    margin-top: 40px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.containedButton {
    min-width: 120px;
    margin: 20px;
    margin-top: 40px;
    color: ${(props) => props.theme.palette.primary.contrastText};
    background-color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
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

export const StyledEditDialog = styled(Dialog)`
    & .MuiDialog-paper {
    width: 40%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  },
`;

export const StyledEditButton = styled(Button)`
  &&.customButton {
    min-width: 120px;
    margin: 20px;
    margin-top: 40px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.containedButton {
    min-width: 120px;
    margin: 20px;
    margin-top: 40px;
    color: ${(props) => props.theme.palette.primary.contrastText};
    background-color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
`;

export const StyledFinishTypography = styled(Typography)`
  &&.customTypo {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    margin: 25px;
  }
  .MuiSvgIcon-root {
    color: #7ac70c;
  }
`;

export const StyledFinishDialog = styled(Dialog)`
    & .MuiDialog-paper {
    width: 35%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  },
`;

export const StyledFinishDialogActions = styled(DialogActions)`
  &&.customDialogActions {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const StyledFinishButton = styled(Button)`
  &&.customButton {
    min-width: 120px;
    margin: 20px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.containedButton {
    min-width: 120px;
    margin: 20px;
    color: ${(props) => props.theme.palette.primary.contrastText};
    background-color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
`;
