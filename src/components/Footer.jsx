import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/logo2.png'; // Make sure to have the logo image in your assets folder

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#232527',
  color: 'white',
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(8),
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  backgroundColor: '#1B1D1E',
  color: 'white',
  padding: theme.spacing(2, 0),
  textAlign: 'center',
}));

const Logo = styled('img')({
  width: '100px',
});

const SocialMediaIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Logo src={logo} alt="Logo" style={{height:'150px', width:'150px'}} />
              
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Box>
            <Typography variant="body1" component="p" style={{ marginTop: '1rem', marginRight: '1rem' }}>
            Fail2Success Software Solutions
              </Typography>
              <Typography variant="body2" component="p" style={{ marginTop: '0.5rem' }}>
                Vizag
                <br />
                Visakhapatnam, AP
                <br />
                Phone: 123-456-7890
                <br />
                Email: f2s@softwaresolutions.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
           
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Navigation
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#" color="inherit" underline="none">
                Home
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#" color="inherit" underline="none">
                About
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#" color="inherit" underline="none">
                Services
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#" color="inherit" underline="none">
                Work
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="#" color="inherit" underline="none">
                Contact
              </Link>
            </Typography>
          </Grid>
         
        </Grid>
        <SocialMediaIcons>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
        </SocialMediaIcons>
      </Container>
      <FooterBottom>
        <Typography variant="body2" component="p">
          Fail2Success Software Solutions. © 2024. All Rights Reserved.
        </Typography>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
