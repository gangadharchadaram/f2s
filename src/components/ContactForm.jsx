// src/ContactForm.js
import React, { useState } from 'react';
import { Container, Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#2D3035',
  color: 'black',
  paddingBottom: '2rem',
}));

const MainContent = styled(Box)(({ theme, visible }) => ({
  display: visible ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3, 0),
  position: 'relative',
  height: '70%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'left',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '0.5s',
    animationFillMode: 'forwards',
  }),
  ...fadeIn,
}));

const MainTitle = styled(Typography)(({ theme, visible }) => ({
  marginLeft: '2rem',
  fontSize: '5rem',
  fontWeight: 'bold',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '1.5s',
    animationFillMode: 'forwards',
  }),
}));

const SubTitle = styled(Typography)(({ theme, visible }) => ({
  fontSize: '1rem',
  marginLeft: '2rem',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '2s',
    animationFillMode: 'forwards',
  }),
}));

const fadeIn = `
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

const ContactForm = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const containerStyle = {
    width: '100%',
    height: '400px',
    marginTop: '2rem'
  };

  const center = {
    lat: 17.7363, // Replace with your latitude
    lng: 83.3269  // Replace with your longitude
  };

  return (
    <>
      <HeaderContainer>
        <Container>
          <Navbar />
          <MainContent visible={currentSection === 0}>
            <Box>
              <MainTitle visible={currentSection === 0}>ABOUT</MainTitle>
              <SubTitle visible={currentSection === 0}>Home <FontAwesomeIcon style={{ height: '12px' }} icon={faGreaterThan} /> ABOUT US</SubTitle>
            </Box>
          </MainContent>
        </Container>
      </HeaderContainer>
      <Box sx={{ backgroundColor: '#fff', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: '900', fontFamily: 'monospace' }}>
            Get In Touch
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  p: 4,
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Send us a Message
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth label="Name" variant="outlined" required />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth label="Email" variant="outlined" required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Project description (optional)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6" component="h2">
                        What do you want us to make?
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel control={<Checkbox />} label="Design" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel control={<Checkbox />} label="Web Development" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel control={<Checkbox />} label="iOS Development" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel control={<Checkbox />} label="Android Development" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel control={<Checkbox />} label="Flutter Development" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel control={<Checkbox />} label="IoT Development" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel control={<Checkbox />} label="Chatbot Development" />
                    </Grid>
                    <Grid item xs={12}>
                      <Button fullWidth variant="contained" color="primary" size="large">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#2D3035',
                  width: '100%',
                  color: '#fff',
                  p: 4,
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Rushi valley, Rushikonda, Visakhapatnam - 530016
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Phone: +91 8142541365
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Email: contact@fail2successsoftwaresolutions.tech
                </Typography>
                
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
              </Box>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ContactForm;
