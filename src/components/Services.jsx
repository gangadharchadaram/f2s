import React, { useState } from 'react';
import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import StrategyIcon from '@mui/icons-material/EmojiObjects'; // Replace with your icon
import CreativeIcon from '@mui/icons-material/Brush'; // Replace with your icon
import DevelopmentIcon from '@mui/icons-material/Computer'; // Replace with your icon
import MarketingIcon from '@mui/icons-material/Campaign'; // Replace with your icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <StrategyIcon style={{ fontSize: 50, color: 'green' }} />,
    title: 'STRATEGY',
    description: 'Identify the primary purpose of the website. Set clear, measurable goals. Understand who your audience is, their needs, preferences, and behaviors. Ensure the design aligns with your brand identity (colors, fonts, logos). Focus on creating an intuitive and user-friendly interface. Ensure the website is fully responsive and works across all devices and screen sizes.Choose the right technology stack (frontend and backend) based on project requirements.'
  },
  {
    icon: <CreativeIcon style={{ fontSize: 50, color: 'green' }} />,
    title: 'CREATIVE',
    description: 'Every click, every scroll, every interaction on your website should feel effortless. We focus on crafting seamless user experiences that captivate your audience from the moment they arrive. By understanding user behavior and preferences, we design interfaces that are intuitive and engaging, ensuring that visitors can easily navigate and find what they need.'
  },
  {
    icon: <DevelopmentIcon style={{ fontSize: 50, color: 'green' }} />,
    title: 'DEVELOPMENT',
    description: 'As full-stack developers, we offer comprehensive solutions that cover both frontend and backend development. This holistic approach ensures that all components of your website work together seamlessly, resulting in a cohesive and efficient digital product. Whether its a complex e-commerce platform, a content management system, or a custom web application, we have the expertise to bring your vision to life.'
  },
  {
    icon: <MarketingIcon style={{ fontSize: 50, color: 'green' }} />,
    title: 'MARKETING',
    description: 'Visibility and performance are key to your website’s success. Our web development process includes comprehensive SEO strategies to improve your search engine rankings and attract organic traffic. We also optimize your website’s speed and performance, ensuring quick load times and smooth interactions that keep visitors engaged and reduce bounce rates.'
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const handleServiceClick = (index) => {
    setSelectedService(index);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" style={{marginTop: '4rem'}}>
        {services.map((service, index) => (
          <Grid item key={index} xs={6} sm={6} md={3} textAlign="center">
            <Box onClick={() => handleServiceClick(index)} style={{ cursor: 'pointer' }}>
              {service.icon}
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                style={{
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  color: index === selectedService ? 'green' : 'black'
                }}
              >
                {service.title}
              </Typography>
              <Box borderBottom={index === selectedService ? 2 : 0} borderColor="green" mb={2}></Box>
            </Box>
          </Grid>
        ))}
        {selectedService !== null && (
          <Grid item xs={12} textAlign="center">
            <Typography variant="body1" color="textSecondary" paragraph>
              {services[selectedService].description}
            </Typography>
          </Grid>
        )}
        <Box display="flex" alignItems="center" style={{ cursor: 'pointer' }} >
          <Typography variant="body2" style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            Read More
          </Typography>
          <ArrowForwardIcon />
        </Box>
      </Grid>
    </Container>
  );
};

export default Services;
