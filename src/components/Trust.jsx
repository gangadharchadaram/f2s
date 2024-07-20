import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';

const Trust = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2d3035',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            marginTop: '4rem',
            backgroundColor: '#2D3035',
            padding: '2rem',
          }}
        >
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  F2S is everything you need to create an awesome website!
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    opacity: '0.5',
                    color: '#fff',
                  }}
                >
                  Make An Appointment Today With Our Online Form
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginLeft: { xs: '0', md: '2rem' },
                  marginTop: { xs: '1rem', md: '0' },
                  padding: '0.5rem 3rem',
                  fontSize: '1rem',
                }}
              >
                Contact us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Trust;
