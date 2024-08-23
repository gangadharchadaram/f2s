import React, { useState } from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  const reviews = [
    {
      text: "We recently partnered with Fail2Success Software Solutions to design a website for our business, and we couldn't be more pleased with the result. From the initial consultation to the final launch, their team demonstrated professionalism, creativity, and a deep understanding of our vision.",
      author: 'Pandey',
      company: 'EZONEHUB - 2024',
    },
    {
      text: "Fail2Success delivered exactly what we needed. The team worked closely with us to develop a responsive and modern website. We have seen a noticeable improvement in user engagement.",
      author: 'Satish',
      company: 'VizagServices - 2024',
    },
    {
      text: "The professionalism and dedication of the team were outstanding. They created a seamless website that reflected our brand perfectly. I highly recommend their services.",
      author: 'Portfolio',
      company: 'Portfolio - 2024',
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const handleAvatarClick = (index) => {
    setCurrentReview(index);
  };

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
          {reviews[currentReview].text}
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
          {reviews[currentReview].company}
        </Typography>
        <Typography variant="h6" component="p">
          {reviews[currentReview].author}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          {reviews.map((review, index) => (
            <Avatar
              key={index}
              sx={{
                bgcolor: currentReview === index ? '#fff' : '#bbb',
                width: 20,
                height: 20,
                mx: 0.5,
                cursor: 'pointer',
              }}
              onClick={() => handleAvatarClick(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
