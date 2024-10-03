import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTo = (path) => {
    handleClose();
    navigate(path);
  }

  return (
    <AppBar position="static">
      <Toolbar variant='regular'>
        {currentUser.username &&
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigateTo('/profile')}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </>
        }
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={() => navigate('/')}
        >
          <HomeIcon />
        </IconButton>
        {currentUser.username &&
          <Button
            color='inherit'
            onClick={logoutUser}
            sx={{
              marginLeft: 'auto',
            }}
          >
            Logout
          </Button>
        }
        {!currentUser.username &&
          <>
            <Button
              color="inherit"
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              onClick={() => navigate('/login')}
              sx={{
                marginLeft: 'auto',
              }}
            >
              <AccountCircleIcon />
            </IconButton>
          </>
        }
      </Toolbar>
    </AppBar>
  );
}
