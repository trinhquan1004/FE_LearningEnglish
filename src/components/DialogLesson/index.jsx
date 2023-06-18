import React from 'react';
import { DialogTitle, DialogContent, Grid } from '@mui/material';
import {
  StyledDialog,
  StyledDialogActions,
  StyledButton,
  StyledTextField,
} from './index.style';

const CustomDialog = ({
  titleDialog,
  open,
  onClose,
  title,
  imageURL,
  onTitleChange,
  onImageURLChange,
  onSubmit,
  nameButton,
}) => (
  <StyledDialog open={open} onClose={onClose}>
    <DialogTitle>{titleDialog}</DialogTitle>
    <br />
    <DialogContent>
      <form onSubmit={onSubmit}>
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
          <StyledButton
            type="submit"
            variant="contained"
            className="customButton"
          >
            {nameButton}
          </StyledButton>
        </StyledDialogActions>
      </form>
    </DialogContent>
  </StyledDialog>
);

export default CustomDialog;
