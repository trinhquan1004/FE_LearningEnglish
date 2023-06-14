import styled from 'styled-components';
import { Typography, Button, Box } from '@mui/material';

export const StyledTypography = styled(Typography)`
  &.titleTypography {
    font-size: 1.25rem;
    color: inherit;
    white-space: nowrap;
    margin-left: 30px;
    font-weight: bold;
  }
`;

export const StyledTypography1 = styled(Typography)`
  color: inherit;
  white-space: nowrap;
  margin-left: 2px;
  text-decoration: none;
`;

export const StyledButton = styled(Button)`
  &&.customButton {
    margin-right: 30px;
    margin-left: 20px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    font-weight: bold;
    color: inherit;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;
