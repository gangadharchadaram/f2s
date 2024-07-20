import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2d3035',
        color: 'white',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Testimonials
        </Typography>
        <FormatQuoteIcon sx={{ fontSize: 40, mt: 2 }} />
        <Typography variant="h6" component="p" sx={{ my: 4 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie vel turpis a sodales. In hac habitasse platea dictumst. Nulla sollicitudin dui vitae.
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
          PORTO WEBSITE CREATION - 2024
        </Typography>
        <Typography variant="h6" component="p">
          John Doe
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Avatar sx={{ bgcolor: '#fff', width: 10, height: 10, mx: 0.5 }} />
          <Avatar sx={{ bgcolor: '#bbb', width: 10, height: 10, mx: 0.5 }} />
          <Avatar sx={{ bgcolor: '#bbb', width: 10, height: 10, mx: 0.5 }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
