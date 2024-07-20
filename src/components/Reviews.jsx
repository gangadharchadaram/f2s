import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const services = [
  {
    numbers: 30,
    title: 'STRATEGY',
  },
  {
    numbers: 240,
    title: 'CREATIVE',
  },
  {
    numbers: 2000,
    title: 'DEVELOPMENT',
  },
  {
    numbers: 20,
    title: 'MARKETING',
  },
];

const Reviews = () => {
  const [counts, setCounts] = useState(services.map(() => 0));

  useEffect(() => {
    const intervals = services.map((service, index) => {
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < service.numbers) {
            newCounts[index] += Math.ceil(service.numbers / 100); // Increase in steps
          } else {
            newCounts[index] = service.numbers;
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 30); // Adjust the speed of counting
      return interval;
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '4rem' }}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} textAlign="center">
            <Box>
              <Typography
                variant="h2"
                component="h3"
                gutterBottom
                style={{
                  fontWeight: 'bold',
                  marginTop: '1rem',
                }}
              >
                {counts[index]}+
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                style={{
                  fontWeight: 'bold',
                  opacity: '0.5',
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
