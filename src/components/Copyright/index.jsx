import React from 'react';
import Link from '@mui/material/Link';
import { StyledTypography } from './index.style';

const Copyright = (props) => (
  <StyledTypography {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}.
  </StyledTypography>
);

export default Copyright;
