import styled from 'styled-components';
import {
  Avatar,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Grid,
} from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  && {
    cursor: pointer;
    margin-left: 30px;
    width: 90px;
    height: 90px;
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    cursor: pointer;
    font-size: 24px;
    color: inherit;
    white-space: nowrap;
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const StyledBox = styled(Box)`
  && {
    margin: 20px 30px;
  }
  &&.customBox {
    flex-grow: 1;
  }
`;

export const StyledIconButton = styled(IconButton)`
  && {
    color: inherit;
    margin-left: 10px;
  }
  .MuiSvgIcon-root {
    font-size: 36px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    color: ${(props) => props.theme.palette.primary.main};
    margin: 0 12px;
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.primary.contrastText};
    }
  }
  &&.customItem {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    border: 3px solid skyblue;
    padding: 8px;
  }
`;

export const StyledGrid = styled(Grid)`
  && {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
    align-items: center;
    width: 240px;
    padding: 0px 5px;
    margin: 10px 0px;
  }
`;
