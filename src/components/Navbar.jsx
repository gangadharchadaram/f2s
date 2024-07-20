import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import logoImg from '../assets/logo.png';
import Hidden from '@mui/material/Hidden';
import { styled, keyframes } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  animation: `${fadeIn} 1s ease-in`,
  marginTop: 0,
  paddingTop: 0,
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1300,
  [theme.breakpoints.up('lg')]: {
    height: '80px',
  },
  [theme.breakpoints.down('lg')]: {
    height: '70px',
  },
  [theme.breakpoints.down('md')]: {
    height: '60px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '50px',
  },
}));

const Title = styled('div')({
  position: 'relative',
  color: '#000',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

const Logo = styled('img')(({ theme }) => ({
  
  animation: `${fadeIn} 1s ease-in`,
  [theme.breakpoints.up('xl')]: {
    height: '290px',
    marginLeft: '310px',
  },
  [theme.breakpoints.down('lg')]: {
    height: '160px',
    marginLeft: '350px',
  },
  [theme.breakpoints.down('md')]: {
    height: '100px',
    marginLeft: '0',
  },
  [theme.breakpoints.down('sm')]: {
    height: '80px',
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: 'black',
  right: '12%',
  textTransform: 'none',
  fontSize: '1rem',
  animation: `${fadeIn} 1s ease-in`,
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <List>
      {['Home', 'About', 'Services', 'Work', 'Contact'].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <ListItem>
        <FontAwesomeIcon icon={faFacebookF} />
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faTwitter} />
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </ListItem>
    </List>
  );

  return (
    <CustomAppBar>
      <Toolbar>
        <Title>
          <Logo src={logoImg} alt="Logo" />
        </Title>
        <Hidden mdDown>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Work</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>
            <FontAwesomeIcon icon={faFacebookF} />
          </NavLink>
          <NavLink>
            <FontAwesomeIcon icon={faTwitter} />
          </NavLink>
          <NavLink>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </NavLink>
        </Hidden>
        <Hidden mdUp>
          <IconButton edge="start" color="black" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList()}
          </Drawer>
        </Hidden>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
