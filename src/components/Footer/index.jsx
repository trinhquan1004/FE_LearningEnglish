import React from 'react';
import { List } from '@mui/material';
import {
  LocationOn,
  Email,
  Smartphone,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import {
  StyledBox,
  StyledTypography,
  StyledStack,
  StyledGrid,
} from './index.style';
import Copyright from '../Copyright';

const Footer = () => (
  <StyledBox className="customBox">
    <StyledTypography className="customTypo">
      Website to learn English through flashcards
    </StyledTypography>
    <StyledStack className="customStack">
      <List sx={{ pr: 10 }}>
        <StyledTypography className="titleTypo">General</StyledTypography>
        <StyledTypography>Home</StyledTypography>
        <StyledTypography>Service</StyledTypography>
        <StyledTypography>Products</StyledTypography>
        <StyledTypography>Field</StyledTypography>
        <StyledTypography>Developer</StyledTypography>
        <StyledTypography>Document</StyledTypography>
      </List>
      <List sx={{ pr: 10 }}>
        <StyledTypography className="titleTypo">Contact</StyledTypography>
        <StyledGrid>
          <LocationOn />
          <StyledTypography>Hai Ba Trung, Ha Noi</StyledTypography>
          <Email />
          <StyledTypography>contact@tq.vn</StyledTypography>
          <Smartphone />
          <StyledTypography>Support: 0999999999</StyledTypography>
          <Phone />
          <StyledTypography>Hotline: 0123456789</StyledTypography>
        </StyledGrid>
      </List>
      <List>
        <StyledTypography className="titleTypo">Follow us</StyledTypography>
        <StyledGrid>
          <Facebook />
          <StyledTypography>Facebook</StyledTypography>
          <Instagram />
          <StyledTypography>Instagram</StyledTypography>
          <YouTube />
          <StyledTypography>YouTube</StyledTypography>
          <Twitter />
          <StyledTypography>Twitter</StyledTypography>
          <LinkedIn />
          <StyledTypography>LinkedIn</StyledTypography>
        </StyledGrid>
      </List>
      <List>
        <StyledTypography>Terms of use</StyledTypography>
        <StyledTypography>Accessibility</StyledTypography>
        <StyledTypography>Privacy and cookies</StyledTypography>
        <StyledTypography>Affiliate programme</StyledTypography>
        <StyledTypography>Getting started</StyledTypography>
        <StyledTypography>Sitemap</StyledTypography>
        <StyledTypography>Frequently asked questions</StyledTypography>
      </List>
    </StyledStack>
    <hr />
    <Copyright />
  </StyledBox>
);

export default Footer;
