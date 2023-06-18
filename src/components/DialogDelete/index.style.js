import styled from 'styled-components';
import { Dialog, Typography, DialogActions, Button } from '@mui/material';

export const StyledTypography = styled(Typography)`
  &&.customTypo {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const StyledDialog = styled(Dialog)`
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
