import React from 'react';
import { AppBar, Box, Toolbar, Typography, MenuItem } from '@mui/material/'
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="navbar">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            
          </IconButton> */}
          <Link className='link' to="/">
          <MenuItem href='/'>
            Civilizations
          </MenuItem>
          </Link>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar