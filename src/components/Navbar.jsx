import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import logo from "../assets/logo2.png";
import { styled, keyframes } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Nav = styled(AppBar)({
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

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <Nav position="static" elevation={0}>
        <Toolbar>
          <Logo src={logo} alt="Logo" />
          <NavLinksContainer>
            <NavLink component={Link} to="/" color="inherit">Home</NavLink>
            <NavLink component={Link} to="/about" color="inherit">About</NavLink>
            <NavLink component={Link} to="/services" color="inherit">Services</NavLink>
            <NavLink component={Link} to="/projects" color="inherit">Work</NavLink>
            <NavLink component={Link} to="/contact" color="inherit">Contact</NavLink>
            <NavLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </NavLink>
            <NavLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            <NavLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </NavLink>
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
      </Nav>
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
            {[
              { text: 'Home', link: '/' },
              { text: 'About', link: '/about' },
              { text: 'Services', link: '/services' },
              { text: 'Work', link: '/projects' },
              { text: 'Contact', link: '/contact' }
            ].map((item, index) => (
              <ListItem button component={Link} to={item.link} key={index}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem button component="a" href="https://www.facebook.com/profile.php?id=61564763188607" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
              
            </ListItem>
            <ListItem button component="a" href="https://www.instagram.com/f2ssoftaresolutions/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
             
            </ListItem>
            <ListItem button component="a" href="https://www.linkedin.com/in/fail2success-software-solutions-812b63323/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
