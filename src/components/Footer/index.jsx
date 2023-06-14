import React from 'react';
import Copyright from '../Copyright';
import { StyledBox, StyledTypography, StyledTypography1 } from './index.style';

const Footer = () => (
  <StyledBox>
    <StyledTypography>Footer</StyledTypography>
    <StyledTypography1>
      Something here to give the footer a purpose!
    </StyledTypography1>
    <Copyright />
  </StyledBox>
);

export default Footer;
