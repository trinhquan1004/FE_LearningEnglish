import styled from 'styled-components';
import { Typography, Box, IconButton, MenuItem, Grid } from '@mui/material';

export const StyledTypography = styled(Typography)`
  && {
    font-weight: 500;
    font-size: 20px;
  }
  &&.titleTypo {
    font-size: 24px;
    color: inherit;
    white-space: nowrap;
    margin-left: 50px;
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
  display: grid;
  grid-template-columns: auto;
  gap: 5px;
  align-items: center;
  width: 240px;
  padding: 0px 5px;
  margin: 10px 0px;
`;
