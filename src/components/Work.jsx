import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Tabs, Tab, Card, CardContent, CardMedia, Link } from '@mui/material';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Footer from './Footer';
import Contact from './Contact';
import vizagServices from '../assets/vizagservices 2.png';
import vizagacserviceslogo from '../assets/vizagserviceslogo.png';
import youtubeLogo from '../assets/youtubelogo.jpg'

const projects = [
  {
    id: 1,
    title: 'Vizag AC Services',
    image: `${vizagServices}`,
    category: 'websites',
    link: 'https://vizagservices.in/'
  },
  {
    id: 3,
    title: 'Vizag AC Services',
    image: `${vizagacserviceslogo}`,
    category: 'logos',
  },

  {
    id: 5,
    title: 'Pramilas Kitchen',
    image: `${youtubeLogo}`,
    category: 'logos',
  },
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
  marginLeft: '3rem',
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
  marginLeft: '3.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  ...(visible && {
    animation: 'fadeIn 1s ease-in-out',
    animationDelay: '2s',
    animationFillMode: 'forwards',
  }),
}));

const CustomTabs = styled(Tabs)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '3rem',
  [theme.breakpoints.down('sm')]: {
    '& .MuiTabs-flexContainer': {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  minWidth: 'unset',
  [theme.breakpoints.down('sm')]: {
    flex: '1 0 50%',
    maxWidth: '50%',
  },
}));

const Work = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterProjects = () => {
    switch (value) {
      case 1:
        return projects.filter((project) => project.category === 'websites');
      case 2:
        return projects.filter((project) => project.category === 'logos');
      case 3:
        return projects.filter((project) => project.category === 'brands');
      case 4:
        return projects.filter((project) => project.category === 'media');
      default:
        return projects;
    }
  };

  const filteredProjects = filterProjects();

  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <HeaderContainer>
        <Container>
          <Navbar />
          <MainContent visible={currentSection === 0}>
            <Box>
              <MainTitle visible={currentSection === 0}>WORK</MainTitle>
              <SubTitle visible={currentSection === 0}>
                Home <FontAwesomeIcon style={{ height: '12px' }} icon={faGreaterThan} /> WORK
              </SubTitle>
            </Box>
          </MainContent>
        </Container>
      </HeaderContainer>
      <Container>
        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              style={{ fontWeight: 'bold', color: '#000', fontFamily: 'system-ui', textAlign: 'left' ,marginLeft: '3rem'}}
            >
              OUR PROJECTS
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              paragraph
              style={{ color: '#000', fontFamily: 'monospace', fontSize: '20px', textAlign: 'left', margin: '0', maxWidth: '1200px',marginLeft: '3rem' }}
            >
              Discover our portfolio of web development projects where we've crafted responsive, user-friendly websites tailored to our clients' unique needs. From sleek corporate sites to dynamic e-commerce platforms, our web development expertise ensures a robust online presence. <br /> <br /> Explore our custom software projects that demonstrate our ability to deliver tailored solutions for complex business challenges. From CRM systems to specialized applications, our software solutions are designed to optimize operations and drive growth.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CustomTabs value={value} onChange={handleChange}>
              <CustomTab label="SHOW ALL" />
              <CustomTab label="WEBSITES" />
              <CustomTab label="LOGOS" />
              <CustomTab label="BRANDS" />
              <CustomTab label="MEDIAS" />
            </CustomTabs>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: 20, marginLeft: 10 }}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card sx={{marginLeft: '3rem'}}>
                  <CardMedia component="img" height="200" image={project.image} alt={project.title}/>
                  <CardContent>
                    <Link href={project.link} color="inherit" target="_blank" rel="noopener">
                      <Typography variant="h6" component="h3">
                        {project.title}
                      </Typography>
                    </Link>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.desc}
                    </Typography>
                  </CardContent>
                </Card>
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

export default Work;
