import React, { useState } from 'react';
import { Typography, Box, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import primaryImg from '../assets/concept-2.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ServiceProvider from './ServiceProvider';
import About from './About';
import Projects from './Projects'
import Testimonials from './Testnomials';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';
import Partners from './Partners';
import Navbar from './Navbar';

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#2D3035',
  color: 'black',
  paddingBottom: theme.spacing(8),
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

const slideIn = `
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
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

const DesignText1 = styled(Typography)(({ theme, visible }) => ({
  fontSize: '4rem',
  color: 'white',
  WebkitTextFillColor: '#2D3035',
  WebkitTextStroke: '0.5px white',
  opacity: '0.2',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '0.5s',
    animationFillMode: 'forwards',
  }),
}));

const DesignText2 = styled(Typography)(({ theme, visible }) => ({
  fontSize: '6rem',
  color: 'white',
  WebkitTextFillColor: '#2D3035',
  WebkitTextStroke: '1px white',
  opacity: '0.2',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '1s',
    animationFillMode: 'forwards',
  }),
}));

const MainTitle = styled(Typography)(({ theme, visible }) => ({
  fontSize: '8rem',
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
  fontSize: '2rem',
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

const CreateText1 = styled(Typography)(({ theme, visible }) => ({
  textAlign: 'right',
  fontSize: '4rem',
  color: 'white',
  WebkitTextFillColor: '#2D3035',
  WebkitTextStroke: '0.5px white',
  opacity: '0.2',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '0.5s',
    animationFillMode: 'forwards',
  }),
}));

const CreateText2 = styled(Typography)(({ theme, visible }) => ({
  fontSize: '6rem',
  textAlign: 'right',
  color: 'white',
  WebkitTextFillColor: '#2D3035',
  WebkitTextStroke: '1px white',
  opacity: '0.2',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '1s',
    animationFillMode: 'forwards',
  }),
}));

const MainCreateTitle = styled(Typography)(({ theme, visible }) => ({
  textAlign: 'right',
  fontSize: '8rem',
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

const SubCreateTitle = styled(Typography)(({ theme, visible }) => ({
  textAlign: 'right',
  fontSize: '2rem',
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

const AnimatedImage = styled('img')(({ theme, visible }) => ({
  ...(visible && {
    animation: 'slideIn 1s ease-in-out',
    animationDelay: '2.5s',
    animationFillMode: 'forwards',
  }),
  ...slideIn,
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  position: 'absolute',
  top: '35%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    top: '30%',
  },
}));

const Header = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleNext = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % 2);
  };

  const handlePrevious = () => {
    setCurrentSection((prevSection) => (prevSection - 1 + 2) % 2);
  };


  return (
    <>
    <HeaderContainer>
      <Container>
        
       <Navbar />
        <MainContent visible={currentSection === 0}>
          <Box>
            <DesignText1 visible={currentSection === 0}>DESIGN</DesignText1>
            <DesignText2 visible={currentSection === 0}>DESIGN</DesignText2>
            <MainTitle visible={currentSection === 0}>DESIGN</MainTitle>
            <SubTitle visible={currentSection === 0}>to a whole new world</SubTitle>
          </Box>
          {!isSmallScreen && (
            <div style={{ backgroundColor: 'transparent', overflow: 'hidden', alignItems: 'end' }}>
              <AnimatedImage visible={currentSection === 0} src={primaryImg} alt="Design" />
            </div>
          )}
        </MainContent>
        <MainContent visible={currentSection === 1}>
        {!isSmallScreen && (
            <div style={{ backgroundColor: 'transparent', overflow: 'hidden', alignItems: 'end' }}>
              <AnimatedImage visible={currentSection === 1} src={primaryImg} alt="Create" />
            </div>
          )}
          <Box>
            <CreateText1 visible={currentSection === 1}>CREATE</CreateText1>
            <CreateText2 visible={currentSection === 1}>CREATE</CreateText2>
            <MainCreateTitle visible={currentSection === 1}>CREATE</MainCreateTitle>
            <SubCreateTitle visible={currentSection === 1}>with innovation</SubCreateTitle>
          </Box>
          
        </MainContent>
        <ArrowButton onClick={handlePrevious} style={{ left: '10px' }}>
          <ArrowBackIosIcon />
        </ArrowButton>
        <ArrowButton onClick={handleNext} style={{ right: '10px' }}>
          <ArrowForwardIosIcon />
        </ArrowButton>
      </Container>
    </HeaderContainer>
    <ServiceProvider />
    <About />
    <Projects />
    <Testimonials />
    <Reviews />
    <Contact />
    <Partners />
    <Footer />
  </>
  );
};

export default Header;
