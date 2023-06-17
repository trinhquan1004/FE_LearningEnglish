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
  handleTitleChange,
  handleImageURLChange,
  handleSubmit,
  nameButton,
}) => (
  <StyledDialog open={open} onClose={onClose}>
    <DialogTitle>{titleDialog}</DialogTitle>
    <br />
    <DialogContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <StyledTextField
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              className="customTextField"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              type="text"
              placeholder="Image URL"
              value={imageURL}
              onChange={handleImageURLChange}
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
