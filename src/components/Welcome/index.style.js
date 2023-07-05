import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const StyledBox = styled(Box)`
  && {
    padding-top: 164px;
  }
`;

export const StyledTypography = styled(Typography)`
  &&.customTypo {
    font-size: 32px;
    text-align: center;
    color: ${(props) => props.theme.palette.text.secondary};
    margin-bottom: 16px;
    white-space: normal;
  }
  &&.titleTypo {
    font-size: 56px;
    text-align: center;
    color: ${(props) => props.theme.palette.text.primary};
    margin-bottom: 8px;
    white-space: nowrap;
  }
  &&.lessonTypo {
    font-size: 25px;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main};
    margin-left: 155px;
    margin-top: 30px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    color: #fff;
    background-color: #1976d2 !important;
  }
`;
