import React, { useState, useEffect } from 'react';
import { DialogTitle, DialogContent, TextField } from '@mui/material';
import {
  StyledDeleteTypography,
  StyledDialog,
  StyledDialogActions,
  StyledDeleteButton,
} from './index.style';

const DialogDelete = ({
  titleDialog,
  open,
  onClose,
  selectedCard,
  onDelete,
}) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmedChange = (e) => {
    if (e.target.value === selectedCard.name) {
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
        <StyledDeleteTypography className="customTypo">
          To delete the card &quot;{selectedCard?.name}&quot;, type the name to
          confirm.
        </StyledDeleteTypography>
        <TextField
          label="Enter Name"
          onChange={handleConfirmedChange}
          fullWidth
        />
      </DialogContent>
      <StyledDialogActions>
        <StyledDeleteButton onClick={handleClose} className="customButton">
          Cancel
        </StyledDeleteButton>
        <StyledDeleteButton
          onClick={onDelete}
          variant="contained"
          className={`customButton deleteButton ${
            !confirmed ? 'disabled' : ''
          }`}
          disabled={!confirmed}
        >
          Delete
        </StyledDeleteButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default DialogDelete;
