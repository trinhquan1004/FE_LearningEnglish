import styled from 'styled-components';
import { Grid, Box, Typography } from '@mui/material';

export const StyledBackgroundGrid = styled(Grid)`
  background-repeat: no-repeat;
  backgroundColor: (t) =>
    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
  background-size: cover;
  background-position: center;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTypography = styled(Typography)`
  font-family: Lato !important;
  text-shadow: 2px 2px 6px rgba(0, 128, 0, 0.2);
  font-weight: bold !important;
  color: rgb(26, 168, 26);
  font-size: 30px !important;
  line-height: 1.5;
  text-align: center;
`;
