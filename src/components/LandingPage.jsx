import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import primaryImg from '../assets/concept-2.png';
import logo from "../assets/logo.png";
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#2D3035',
  color: 'black',
  paddingBottom: theme.spacing(8),
}));

const Navbar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const Logo = styled('img')({
  height: '100px', // Adjust height as needed
  objectFit: 'contain',
  marginRight: 'auto', // Pushes the logo to the left
});

const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(4), // Adds space between logo and nav links
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide nav links on small screens
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
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
  color: 'rgba(255, 255, 255, 0.1)',
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
  color: 'rgba(255, 255, 255, 0.1)',
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleNext = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % 2);
  };

  const handlePrevious = () => {
    setCurrentSection((prevSection) => (prevSection - 1 + 2) % 2);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <HeaderContainer>
      <Container>
        <Navbar position="static" elevation={0}>
          <Toolbar>
            <Logo src={logo} alt="Logo" />
            <NavLinksContainer>
              <NavLink color="inherit">Home</NavLink>
              <NavLink color="inherit">About</NavLink>
              <NavLink color="inherit">Services</NavLink>
              <NavLink color="inherit">Work</NavLink>
              <NavLink color="inherit">Contact</NavLink>
              <NavLink>
                <FontAwesomeIcon icon={faFacebookF} />
              </NavLink>
              <NavLink>
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
              <NavLink>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </NavLink>
              <NavLink color="inherit">🔍</NavLink>
            </NavLinksContainer>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Navbar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {['Home', 'About', 'Services', 'Work', 'Contact', 'F', 'X', 'in', '🔍'].map((text, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
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
          <Box>
            <DesignText1 visible={currentSection === 1}>CREATE</DesignText1>
            <DesignText2 visible={currentSection === 1}>CREATE</DesignText2>
            <MainTitle visible={currentSection === 1}>CREATE</MainTitle>
            <SubTitle visible={currentSection === 1}>with innovation</SubTitle>
          </Box>
          {!isSmallScreen && (
            <div style={{ backgroundColor: 'transparent', overflow: 'hidden', alignItems: 'end' }}>
              <AnimatedImage visible={currentSection === 1} src={primaryImg} alt="Create" />
            </div>
          )}
        </MainContent>
        <ArrowButton onClick={handlePrevious} style={{ left: '10px' }}>
          <ArrowBackIosIcon />
        </ArrowButton>
        <ArrowButton onClick={handleNext} style={{ right: '10px' }}>
          <ArrowForwardIosIcon />
        </ArrowButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
