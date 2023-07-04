import styled from 'styled-components';
import { Box, Typography, Stack, Grid } from '@mui/material';

export const StyledBox = styled(Box)`
  &&.customBox {
    margin-top: 100px;
    background-color: ${(props) => props.theme.palette.primary.main};
    padding: 30px 100px;
    padding-bottom: 20px;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-size: 16px;
    padding-bottom: 8px;
  }
  &&.customTypo {
    font-size: 20px;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
  }
  &&.titleTypo {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const StyledStack = styled(Stack)`
  &&.customStack {
    display: flex;
    justify-content: center;
    margin: 20px;
    padding: 10px;
    flex-direction: row;
    gap: 5rem;
    color: #fff;
  }
`;

export const StyledGrid = styled(Grid)`
  && {
    display: grid;
    grid-template-columns: 40px 200px;
    gap: 5px;
    row-gap: 2px;
    justify-content: center;
    align-items: center;
    width: 240px;
    margin: 0 auto;
    place-content: center;
    > :nth-child(even) {
      padding: 6px 0px;
    }
  }
`;
