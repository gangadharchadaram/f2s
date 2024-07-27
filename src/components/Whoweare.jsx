import React, { useState } from 'react';
import {  Typography, Box, Button, Container, Grid } from '@mui/material';
import Navbar from './Navbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img from "../assets/concept-1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import About from './About';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  Card, CardContent } from '@mui/material'
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';
import { faGreaterThan, faLessThan, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import { styled, useTheme } from '@mui/material/styles';
import Partners from './Partners';
import {  CardMedia, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Root = styled('div')(({ theme }) => ({
  paddingTop: '3rem',
  paddingBottom: '3rem',
  backgroundColor: '#2D3035',
  flexGrow: 1,
  padding: `${theme.spacing(8)}px 0`,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: '900',
  color: '#fff',
  textAlign: 'left',
  marginBottom: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  '&:nth-of-type(odd)': {
    backgroundColor: '#212121',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#e0e0e0',
  },
}));

const CardText = styled(Typography)(({ theme }) => ({
  color: '#000',
  '&:nth-of-type(odd)': {
    color: '#fff',
  },
}));

const services = [
  'UX Design',
  'Web Development',
  'B2B Software',
  'Content Marketing',
  'Email Marketing',
  'Search Engine Optimize',
  'Social Media Ads',
  'Brand and Identity',
  'Content Strategy',
];
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
  padding: theme.spacing(3, 0),
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



const Header = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'CEO & Founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Janice Doe',
      title: 'CEO & Founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Robert Doe',
      title: 'CEO & Founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Monica Doe',
      title: 'CEO & Founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
    },
  ];
  const faqs = [
    { question: 'Why Choose F2S?', answer: 'F2S is the best choice because we do multiple tasks like web development, logo design, SEO, PPC, SMM, respond quickly and deliver the product ontime' },
    { question: 'How do you build my website?', answer: 'We build your website by understanding your requirements. We ensure to configure the best and suitable domain name, hosting providers, customized design and content. Furthermore, we build your website tailoring your needs, with SEO and speed optimization. The below screenshot shows the process flow that we follow at ColorWhistle.' },
    { question: 'How much does a new website cost?', answer: 'Well, it depends. Each website design and development project is unique. The cost of a new site will depend on a number of factors such as: the number of pages, the functionality requirements, how the site is coded, if it requires a content management system (CMS) and which CMS platform is the best fit,  does the website need ecommerce functionality, is it a pre-built template or a custom designed website. Another functionality that can add to the cost of a website build is integration with 3rd party software.' },
    { question: 'How do we communicate during the web design and development process?', answer: 'After our initial scheduled call to discuss the website needs and answer any questions, most of the communication will take place over email. We can schedule periodic calls to discuss ideas, however our preference is to use email which documents all of the questions, information and requested changes.' },
    { question: 'How can my website rank high on search engine results?', answer: 'We specialize in Search Engine Optimization (SEO) and have extensive experience in making websites search-engine-friendly. ' },
  ];
  const theme = useTheme();
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <>
    <HeaderContainer>
      <Container>
       <Navbar />
        <MainContent visible={currentSection === 0}>
          <Box>
            <MainTitle visible={currentSection === 0}>ABOUT</MainTitle>
            <SubTitle visible={currentSection === 0}>Home  <FontAwesomeIcon style={{height: '12px'}} icon={faGreaterThan} /> ABOUT US</SubTitle>
          </Box>
        </MainContent>
      </Container>
    </HeaderContainer>
    <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            style={{ fontWeight: 'bold', color: '#000', fontFamily: 'system-ui'}}
            sx={{
              '@media (min-width: 960px)': {
                marginLeft: '26rem',
                marginTop: '6rem' 
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
                marginLeft: '26rem',
               // Add margin-left for large screens
              },
            }}
            style={{ color: '#000', fontFamily: 'Andalé Mono', fontSize: '25px'  }}
          >
           Welcome to F2S Software Solutions! Based in Vizag.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{
              '@media (min-width: 960px)': {
                marginLeft: '26rem', // Add margin-left for large screens
              },
            }}
            style={{ color: '#000', marginRight: '20rem', fontFamily: 'monospace', fontSize: '20px' }}
          >
            We are a dynamic team of dedicated professionals specializing in website development and digital marketing services. Our mission is to help business of all sizes establish a strong online presence and achieve their digital goals.
            We will Transform your business Ideas into Stunning websites and promote your business website in order to bring in more visitors.
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
          <FontAwesomeIcon icon={faQuoteLeft} style={{marginLeft: '26rem'}} />
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
            our philosophy : through preseverance and innovation, we turn setbacks into stepping stones towards success.
         
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
          </Box>
        </Grid>

    <Root theme={theme}>
      <Container>
        <Title variant="h3" theme={theme}>
          Why Choose Us
          
        </Title>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard theme={theme}>
                <CardContent>
                  <CardText variant="h6" theme={theme}>
                    {service}
                  </CardText>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
    <Reviews />
    <HeaderContainer>
      <Container>
      <Typography variant="h4" component="h2" sx={{fontWeight: 900, color: '#fff', paddingTop: '2rem', marginTop: '4rem'}} gutterBottom>
        Leadership
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ display: 'flex', alignItems: 'center', height: '100%', backgroundColor: '#2d3035', color: '#fff' }}>
              <CardMedia
                component="img"
                sx={{ width: 150, height: 150 }}
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                  {member.description}
                </Typography>
                <IconButton aria-label="facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="linkedin">
                  <LinkedInIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </HeaderContainer>
    <Container sx={{paddingTop: '2rem'}}>
      <Typography variant="h4" component="h2" sx={{fontWeight: 900}} gutterBottom>
        FAQ's
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography>
              {index + 1} - {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
    <Contact />
    <Partners />
    <Footer />
  </>
  );
};

export default Header;
