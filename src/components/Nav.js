import  {React,useState }from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './navbar.css';
import { Link } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import About from './pages/About/About';
const drawerWidth = 240;
const navItems = ['Home', 'About','Projects','Skills', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography variant="h6" sx={{ my: 2 }}>
        Naveen Menda
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  <Home/>
  const container = window !== undefined ? () => window().document.body : undefined;
  const navLinks = {
    Home: "/home",
    About: "/about",
    Contact: "/contact",
  };
  return (
    <>
    <Box sx={{ display: 'flex' }} className="navbarmain">
      <CssBaseline />
      <AppBar component="nav"
       sx={{ backgroundColor: '#000000', width: '100%', boxShadow: '0px 4px 30px 0px',height:'120px',fontSize:'24px'}}
       >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        <Typography
            variant="h6"
            component="div"
            className='navbar'
            sx={{ display: { xs: 'none', sm: 'block' },padding:'10px', textAlign: 'left', width: '73%',marginTop:'20px' }}
            >
           <span className='navbarhead'>Naveen Menda</span>
        </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block',marginTop:'20px',fontSize:'16px' } }} className='navitems'>
            {navItems.map((item) => (
            //      <Link to={navLinks[item]} key={item} style={{ textDecoration: 'none' }}>
            //   <Button sx={{ color: '#fff' }}>
            //     {item}
            //   </Button>
            //   </Link>
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
    {/* <Home/> */}
    </>
  );
}

DrawerAppBar.propTypes = {

  window: PropTypes.func,
  
};

export default DrawerAppBar;
