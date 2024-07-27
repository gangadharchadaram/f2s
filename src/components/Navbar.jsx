import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar,Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import logo from "../assets/logo.png";
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
        <NavLink component={Link} to="/home" color="inherit">Home</NavLink>
        <NavLink component={Link} to="/about" color="inherit">About</NavLink>
        <NavLink component={Link} to="/services" color="inherit">Service</NavLink>
        <NavLink component={Link} to="/projects" color="inherit">Work</NavLink>
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
        {['Home', 'About', 'Services', 'Work', 'Contact', 'F', 'X', 'in', '🔍'].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
  </>
  );
};

export default Navbar;
