import styled from 'styled-components';
import { Box, Container } from '@mui/material';

export const StyledContainer = styled(Container)`
  padding: 30px !important;
  width: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledBox = styled(Box)`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
