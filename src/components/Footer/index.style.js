import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 48px;
`;

export const StyledTypography = styled.h3`
  text-align: center;
  margin-bottom: 8px;
`;

export const StyledTypography1 = styled(Typography)`
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.palette.text.secondary};
`;
