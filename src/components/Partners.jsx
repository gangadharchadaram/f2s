import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import logo1 from '../assets/toyota-logo.png';
import logo2 from '../assets/microsoft-logo.png';
import logo3 from '../assets/samsung-logo.png';
import logo4 from '../assets/google-logo.png';
import logo5 from '../assets/walt-disney-logo.png';
import logo6 from '../assets/nike-logo.png';

const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const LogoBarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(4, 0),
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const LogoScrollContainer = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  animation: `${scroll} 20s linear infinite`,
}));

const LogoImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  marginRight: '2rem',
  display: 'inline-block',
});

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Partners = () => {
  return (
    <LogoBarContainer height="300px">
      <Container>
      <Typography variant='h4' sx={{textAlign: 'center', fontWeight: '900'}}>Our Clients</Typography>
        <LogoScrollContainer>
            
          {logos.map((logo, index) => (
            <LogoImage key={index} src={logo} alt={`Logo ${index + 1}`} style={{height:"300px"}}/>
          ))}
          {/* Duplicate the logos to create an infinite scroll effect */}
          {logos.map((logo, index) => (
            <LogoImage key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} style={{height:"300px"}}/>
          ))}
        </LogoScrollContainer>
      </Container>
    </LogoBarContainer>
  );
};

export default Partners;
