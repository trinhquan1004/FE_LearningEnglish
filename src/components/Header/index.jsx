import React, { useState } from 'react';
import { AppBar, Toolbar, Menu } from '@mui/material';
import {
  AccountCircle,
  AccountTree,
  Forum,
  Build,
  Feedback,
  Help,
} from '@mui/icons-material';
import {
  StyledTypography,
  StyledBox,
  StyledIconButton,
  StyledMenuItem,
  StyledGrid,
} from './index.style';

const Header = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleIconClick = (event) => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const onLogoutClick = () => {
    onLogout();
    handleCloseMenu();
    window.location.href = '/lesson';
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <StyledTypography className="titleTypo">
          LearnEnglish | FlashCards
        </StyledTypography>
        <StyledBox className="customBox" />
        <StyledBox>
          <StyledIconButton onClick={handleIconClick}>
            <AccountCircle />
          </StyledIconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <StyledMenuItem onClick={handleCloseMenu} className="customItem">
              Manage your account
            </StyledMenuItem>
            <StyledGrid>
              <StyledMenuItem onClick={handleCloseMenu}>
                <AccountTree sx={{ mr: 2 }} />
                Documentation
              </StyledMenuItem>
              <StyledMenuItem onClick={handleCloseMenu}>
                <Forum sx={{ mr: 2 }} />
                Forums
              </StyledMenuItem>
              <StyledMenuItem onClick={handleCloseMenu}>
                <Build sx={{ mr: 2 }} />
                Developer center
              </StyledMenuItem>
              <StyledMenuItem onClick={handleCloseMenu}>
                <Help sx={{ mr: 2 }} />
                Support
              </StyledMenuItem>
              <StyledMenuItem onClick={handleCloseMenu}>
                <Feedback sx={{ mr: 2 }} />
                Give us feedback
              </StyledMenuItem>
            </StyledGrid>
            <StyledMenuItem onClick={onLogoutClick}>Log out</StyledMenuItem>
          </Menu>
        </StyledBox>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
