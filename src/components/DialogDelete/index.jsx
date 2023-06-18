import React, { useState, useEffect } from 'react';
import { DialogTitle, DialogContent, TextField } from '@mui/material';
import {
  StyledTypography,
  StyledDialog,
  StyledDialogActions,
  StyledButton,
} from './index.style';

const DialogDelete = ({
  titleDialog,
  open,
  onClose,
  selectedItem,
  onDelete,
}) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmedChange = (e) => {
    if (e.target.value === selectedItem.title) {
      setConfirmed(true);
      return;
    }
    setConfirmed(false);
  };

  const handleClose = () => {
    onClose();
    setConfirmed(false);
  };

  useEffect(() => {
    if (open) setConfirmed(false);
  }, [open]);

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle>{titleDialog}</DialogTitle>
      <DialogContent>
        <StyledTypography className="customTypo">
          To delete the &quot;{selectedItem?.title}&quot;, type the to confirm.
        </StyledTypography>
        <TextField
          label="Lesson Name"
          onChange={handleConfirmedChange}
          fullWidth
        />
      </DialogContent>
      <StyledDialogActions>
        <StyledButton onClick={handleClose} className="customButton">
          Cancel
        </StyledButton>
        <StyledButton
          onClick={onDelete}
          variant="contained"
          className={`customButton deleteButton ${
            !confirmed ? 'disabled' : ''
          }`}
          disabled={!confirmed}
        >
          Delete
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default DialogDelete;
