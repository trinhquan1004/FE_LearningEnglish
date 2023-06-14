import styled from 'styled-components';
import { Box, Stack, Typography } from '@mui/material';

export const StyledBox = styled(Box)`
  padding-top: 64px;
  padding-bottom: 48px;
  background-color: ${(props) => props.theme.palette.background.paper};
`;

export const StyledTypography = styled(Typography)`
  &&.titleTypo {
    font-size: 3.5rem;
    text-align: center;
    color: ${(props) => props.theme.palette.text.primary};
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
`;

export const StyledTypography1 = styled(Typography)`
  &&.paraTypo {
    font-size: 2rem;
    text-align: center;
    color: ${(props) => props.theme.palette.text.secondary};
    margin-bottom: 1rem;
    white-space: normal;
  }
`;

export const StyledStack = styled(Stack)`
  &&.customStack {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;
