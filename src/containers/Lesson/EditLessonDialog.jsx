import React from 'react';
import { DialogTitle, DialogContent, Grid } from '@mui/material';
import {
  StyledDialog,
  StyledDialogActions,
  StyledButton,
  StyledTextField,
} from './index.style';

const DialogEditLesson = ({
  open,
  onClose,
  title,
  imageURL,
  onTitleChange,
  onImageURLChange,
  onSubmitEdit,
}) => (
  <StyledDialog open={open} onClose={onClose}>
    <DialogTitle>Edit Lesson</DialogTitle>
    <br />
    <DialogContent>
      <form onSubmit={onSubmitEdit}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <StyledTextField
              type="text"
              placeholder="Title"
              value={title}
              onChange={onTitleChange}
              className="customTextField"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              type="text"
              placeholder="Image URL"
              value={imageURL}
              onChange={onImageURLChange}
              className="customTextField"
            />
          </Grid>
        </Grid>
        <br />
        <StyledDialogActions className="customDialogActions">
          <StyledButton onClick={onClose} className="customButton">
            Cancel
          </StyledButton>
          <StyledButton type="submit" className="containedButton">
            Edit
          </StyledButton>
        </StyledDialogActions>
      </form>
    </DialogContent>
  </StyledDialog>
);

export default DialogEditLesson;
