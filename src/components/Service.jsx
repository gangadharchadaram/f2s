import React, { useState } from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import ServiceProvider from './ServiceProvider';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card, CardContent,  Button } from '@mui/material';
import PlanFormPopup from './PlanFormPopup';

import Contact from './Contact';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  border: '1px solid #e0e0e0',
  boxShadow: 'none',
  [theme.breakpoints.up('md')]: {
    minHeight: '400px',
  },
}));


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


const useStyles = makeStyles({
  stepContainer: {
    textAlign: 'center',
    marginTop: '2rem',
    '&:hover $circle': {
      backgroundColor: 'green',
      color: 'white',
    },
  },
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    backgroundColor: 'white',
    color: 'black',
    transition: 'background-color 0.3s, color 0.3s',
    '@media (max-width: 600px)': {
      width: '70px',
      height: '70px',
    },
  },
  circleInactive: {
    backgroundColor: '#e0e0e0',
  },
  stepTitle: {
    marginTop: '1rem',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  stepDescription: {
    marginTop: '0.5rem',
    '@media (max-width: 600px)': {
      fontSize: '0.875rem',
    },
  },
});
  
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
  const plans = [
    {
      title: 'Basic',
      price: '₹279.00/month',
      years: 'For 3 years',
      oldPrice: '₹399.00',
      save: '82%',
      features: [
        '6 pages static website',
        'SSL Certificate',
        'WEB Hosting',
        'DOMAIN Hosting',
        'Free domain',
        'User Friendly website',
        'Free service(3 years)',
        'Company Email',
        'Dedicated IP address',
        'Priority support',
      ],
      mostPopular: false,
    },
    {
      title: 'Pro',
      price: '₹699.00/month',
      years: 'For 3 years',
      oldPrice: '₹999.00',
      save: '78%',
      features: [
        '8 pages Dynamic website',
        'SSL Certificate',
        'WEB Hosting',
        'DOMAIN Hosting',
        'Free domain',
        'User Friendly website',
        'Free service(3 years)',
        'Company Email',
        'Dedicated IP address',
        'Priority support',
      ],
      mostPopular: true,
    },
    {
      title: 'Premium',
      price: '₹849.00/mo',
      years: 'For 3 years',
      oldPrice: '₹1299.00',
      save: '64%',
      features: [
        '10+ pages Dynamic website',
        'SSL Certificate',
        'WEB Hosting',
        'DOMAIN Hosting',
        'Free domain',
        'User Friendly website',
        'Free service(3 years)',
        'Company Email',
        'Dedicated IP address',
        'Priority support',
      ],
      mostPopular: false,
    },
    {
      title: 'Mobile Applications',
      price: '₹1699.00/mo',
      years: 'For 3 years',
      oldPrice: '₹2499.00',
      save: '58%',
      features: [
        'Payment Gateway',
        'User Login',
        'Admin Login',
        'Free domain',
        'Free email',
        'Unlimited free SSL',
        'Daily backups',
        'Standard WooCommerce',
        'Dedicated IP address',
        'Priority support',
      ],
      mostPopular: false,
    },
  ];
  const classes = useStyles();
  const [currentSection, setCurrentSection] = useState(0);

  const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

  
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
        <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h3" sx={{ fontWeight: '900', color: '#fff'}}>Pick Your Perfect Plan</Typography>
      </Box>
      <Grid container spacing={4} sx={{ marginBottom: '2rem'}}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <CardContent sx={{backgroundColor: '#212121'}}>
               
                <Typography variant="h5" gutterBottom color={'white'}>
                  {plan.title}
                </Typography>
                <Typography variant="h6" color="white" style={{ textDecoration: 'line-through' }}>
                  {plan.oldPrice}
                </Typography>
                <Typography variant="h4" color="white" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="p" color="secondary" gutterBottom>
                  {plan.years}
                </Typography>
                <Typography variant="subtitle2" color="white" gutterBottom>
                  Save {plan.save}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleOpenPopup} fullWidth>
                  Choose plan
                </Button>
                <PlanFormPopup open={openPopup} handleClose={handleClosePopup} />
                <Box mt={2}>
                  <Typography variant="body1" color="white">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Container>
    <Container>
      <Grid container spacing={3} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant='h4' sx={{ fontWeight: '900', marginBottom: '4rem' }}>
            OUR STRATEGY
          </Typography>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step) => (
            <Grid item xs={12} md={4} key={step.id} className={classes.stepContainer}>
              <Box className={`${classes.circle} ${step.id !== 4 ? classes.circleInactive : ''}`} sx={{marginBottom: '2rem'}}>
                {`0${step.id}`}
              </Box>
              <Typography variant="h5" className={classes.stepTitle} sx={{marginBottom: '1rem'}}>
                {step.title}
              </Typography>
              <Typography variant="body2" className={classes.stepDescription} sx={{ fontFamily: 'Monospace' }}>
                {step.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
      <Contact />
      <Footer />
    </>
  );
};

export default Service;
