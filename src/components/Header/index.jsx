import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  StyledTypography,
  StyledTypography1,
  StyledButton,
  StyledBox,
} from './index.style';

const Header = ({ handleLogout }) => (
  <AppBar position="relative">
    <Toolbar>
      <StyledTypography className="titleTypography">English</StyledTypography>
      <Box sx={{ flexGrow: 1 }} />
      <StyledBox>
        <IconButton color="inherit">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <StyledTypography1>
          <StyledButton
            href="/login"
            onClick={handleLogout}
            className="customButton"
          >
            Logout
          </StyledButton>
        </StyledTypography1>
      </StyledBox>
    </Toolbar>
  </AppBar>
);

export default Header;
