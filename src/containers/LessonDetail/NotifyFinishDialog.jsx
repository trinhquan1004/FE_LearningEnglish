import React from 'react';
import { DialogTitle } from '@mui/material';
import {
  StyledFinishTypography,
  StyledFinishDialog,
  StyledFinishDialogActions,
  StyledFinishButton,
} from './index.style';

const NotifyFinishDialog = ({ open, onClose, onReturn }) => (
  <StyledFinishDialog open={open} onClose={onClose}>
    <DialogTitle>Complete Lesson</DialogTitle>
    <StyledFinishTypography className="customTypo">
      Congratulations, you have completed this lesson!
    </StyledFinishTypography>
    <StyledFinishDialogActions className="customDialogActions">
      <StyledFinishButton onClick={onClose} className="customButton">
        Exit
      </StyledFinishButton>
      <StyledFinishButton onClick={onReturn} className="containedButton">
        Back Lesson
      </StyledFinishButton>
    </StyledFinishDialogActions>
  </StyledFinishDialog>
);

export default NotifyFinishDialog;
