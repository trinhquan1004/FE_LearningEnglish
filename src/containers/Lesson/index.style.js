import styled from 'styled-components';
import { Card, Dialog, Container } from '@mui/material';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledDialog = styled(Dialog)`
    & .MuiDialog-paper {
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  },
`;

export const StyledContainer = styled(Container)`
  min-width: 70% !important;
  padding-top: 15px;
  padding-bottom: 15px;
`;
