import React from 'react';
import { Container, Typography, Box, useMediaQuery } from '@mui/material';
import vizagservices from "../assets/vizagservices.png"
import interior from "../assets/interior.avif"
import portfolio from "../assets/portfolio.avif"
import EZone from "../assets/Ezonehub.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    img: `${vizagservices}`, // Replace with actual image URL
    title: 'Vizag AC Services',
    year: '2024',
    description: 'Website Creation',
  },
  {
    img: `${EZone}`, // Replace with actual image URL
    title: 'EZOneHub',
    year: '2024',
    description: 'E-Commerce Application',
  },
  {
    img: `${interior}`, // Replace with actual image URL
    title: 'V constructions ',
    year: '2024',
    description: 'Website Creation',
  },
  {
    img: `${portfolio}`, // Replace with actual image URL
    title: 'Portfolio',
    year: '2024',
    description: 'Website Creation',
  },
  {
    img: `${interior}`, // Replace with actual image URL
    title: 'V constructions ',
    year: '2024',
    description: 'Website Creation',
  },
  {
    img: `${vizagservices}`, // Replace with actual image URL
    title: 'Vizag AC Services',
    year: '2024',
    description: 'Website Creation',
  },
  {
    img: `${interior}`, // Replace with actual image URL
    title: 'V constructions ',
    year: '2024',
    description: 'Website Creation',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const OurWork = () => {
  const isLargeScreen = useMediaQuery('(min-width:2074px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1023px)');
  const isSmallScreen = useMediaQuery('(max-width:599px)');

  const getTitleStyles = () => {
    if (isLargeScreen) return { textAlign: 'left', marginLeft: '0rem' };
    if (isMediumScreen) return { textAlign: 'center', marginLeft: '0' };
    if (isSmallScreen) return { textAlign: 'center', marginLeft: '0' };
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', backgroundColor: '#fff', padding: '2rem 0' }}>
      <Typography 
        variant="h4" 
        component="h4" 
        gutterBottom 
        style={{ fontWeight: 'bold', color: '#000', ...getTitleStyles() }}
      >
        Our Amazing Work
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box key={index} padding="0 8px" margin="10px">
            <Box position="relative" sx={{marginRight: '1.5rem'}}>
              <img
                src={project.img}
                alt={project.title}
                style={{ width: '300px',height: '300px', borderRadius: '8px', marginRight: '80px' }}
              />
              <Box position="absolute" bottom="16px" left="16px" color="white" backgroundColor="#2d3035" padding="0.5rem">
                <Typography variant="body2">
                  {project.description} – {project.year}
                </Typography>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default OurWork;
