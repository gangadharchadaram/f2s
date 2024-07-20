import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img from "../assets/concept-1.png";

const About = () => {
  return (
    <Container
      maxWidth="100%"
      style={{
        marginTop: '2rem',
        backgroundColor: '#2D3035',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={3} alignItems="center" padding={'60px'}>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            style={{ fontWeight: 'bold', color: '#fff' }}
            sx={{
              '@media (min-width: 960px)': {
                marginLeft: '20rem',
                // Add margin-left for large screens
              },
              'sm': { marginTop: '2rem' },
            }}
          >
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{
              '@media (min-width: 960px)': {
                marginLeft: '20rem', // Add margin-left for large screens
              },
            }}
            style={{ color: '#fff' }}
          >
           Welcome to F2S Software Solutions! Based in Vizag.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{
              '@media (min-width: 960px)': {
                marginLeft: '20rem', // Add margin-left for large screens
              },
            }}
            style={{ color: '#fff' }}
          >
            We are a dynamic team of dedicated professionals specializing in website development and digital marketing services. Our mission is to help business of all sizes establish a strong online presence and achieve their digital goals.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{
              '@media (min-width: 960px)': {
                marginLeft: '20rem', // Add margin-left for large screens
              },
            }}
            style={{ color: '#fff' }}
          >
            At Fail2Success, we believe that every challenge is an opportunity to grow and succedd. Our name embodies our philosophy : through preseverance and innovation, we turn setbacks into stepping stones towards success.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            style={{ cursor: 'pointer' }}
            sx={{
              '@media (min-width: 960px)': {
                marginLeft: '20rem', // Add margin-left for large screens
              },
            }}
          >
            <Typography variant="body2" style={{ fontWeight: 'bold', marginRight: '0.5rem', color: '#fff' }}>
              Read More
            </Typography>
            <ArrowForwardIcon style={{ color: '#fff' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
          <Box display="flex" justifyContent="center">
            <img
              src={img}
              alt="Office"
              style={{ width: '100%', maxWidth: '600px', height: {sm:'auto', md: '450px', lg: '400px'}, borderRadius: '8px' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
