import React, { useState } from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import ServiceProvider from './ServiceProvider';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img from "../assets/concept-1.png";
import Contact from './Contact';
import Footer from './Footer';


const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#2D3035',
  color: 'black',
  paddingBottom: '2rem',
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

const MainContent = styled(Box)(({ theme, visible }) => ({
  display: visible ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem',
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
  marginLeft: '0.5rem',
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


const useStyles = makeStyles((theme) => ({
    stepContainer: {
      textAlign: 'center',
      margin: '4rem',
    },
    circle: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#4caf50', // Color verde para el tercer paso
      border: '2px solid #4caf50',
    },
    circleInactive: {
      backgroundColor: '#fff',
      color: '#4caf50', // Color verde para los círculos inactivos
    },
    stepTitle: {
      marginTop: '2rem',
      fontWeight: 'bold',
    },
    stepDescription: {
      marginTop: '1rem',
      color: '#777',
    },
  }));
  
  const steps = [
    {
      id: 1,
      title: 'Design',
      description: 'Crafting unique, visually appealing designs that capture your brand’s essence and engage your audience.Designing intuitive and user-friendly interfaces that enhance the overall experience for your visitors.',
    },
    {
      id: 2,
      title: 'Develop',
      description: 'Creating dynamic, responsive websites using the latest technologies and frameworks to ensure seamless user experiences across all devices.Developing and integrating APIs to streamline communication between different systems and services',
    },
    {
      id: 3,
      title: 'Deliver',
      description: 'Designing and developing mobile applications for iOS and Android that offer intuitive user experiences and meet your business goals.Expert handling of all aspects of website deployment, including server setup, domain configuration, and live launch.',
    },
  ];

const Service = () => {
  const classes = useStyles();
  const [currentSection, setCurrentSection] = useState(0);

  
  return (
    <>
      <HeaderContainer>
        <Container>
          <Navbar />
          <MainContent visible={currentSection === 0}>
            <Box>
              <MainTitle visible={currentSection === 0}>SERVICES</MainTitle>
              <SubTitle visible={currentSection === 0}>
                Home <FontAwesomeIcon style={{ height: '12px' }} icon={faGreaterThan} /> SERVICES
              </SubTitle>
            </Box>
          </MainContent>
        </Container>
      </HeaderContainer>
      <ServiceProvider />
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
    <Container>
        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} sm={12}  style={{ textAlign: 'center' }}>
          <Typography variant='h4' sx={{fontWeight: '900'}}>
            OUR STRATEGY
          </Typography>
         <Container>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step) => (
          <Grid item xs={12} sm={4} key={step.id} className={classes.stepContainer} sx={{marginTop: '5rem'}}>
            <Box className={`${classes.circle} ${step.id !== 3 ? classes.circleInactive : ''}`}>
              {`0${step.id}`}
            </Box>
            <Typography variant="h6" className={classes.stepTitle}>
              {step.title}
            </Typography>
            <Typography variant="body2" className={classes.stepDescription} sx={{fontFamily: 'Monospace'}}>
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Grid>
        </Grid>
      </Container>
      <Contact />
      <Footer />
    </>
  );
};

export default Service;
