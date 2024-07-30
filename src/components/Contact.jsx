import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import ContactFormDialog from './ContactFormDialog';

const Contact = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F4F4F4',
        color: 'black',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            marginTop: '4rem',
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
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  F2S is everything you need to find an awesome website!
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    opacity: '0.5',
                    color: '#000',
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
                onClick={handleOpenDialog}
              >
                Contact us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ContactFormDialog open={openDialog} onClose={handleCloseDialog} />
    </Box>
  );
};

export default Contact;
