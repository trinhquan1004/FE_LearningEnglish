import styled from 'styled-components';
import { Dialog, DialogActions, Button, TextField } from '@mui/material';

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
    margin-top: 36px;
  }
`;

export const StyledButton = styled(Button)`
  &&.customButton {
    min-width: 120px;
    margin: 20px;
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
