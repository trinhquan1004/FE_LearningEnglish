import styled from 'styled-components';
import { Typography } from '@mui/material';

export const StyledTypography = styled(Typography)`
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  text-align: center;
  color: ${(props) => props.theme.palette.text.secondary};
  margin-top: 40px !important;
`;
