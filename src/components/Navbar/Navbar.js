import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';


const Navbar = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color="inherit" edge="start" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' style={{ flexGrow: 1 }}>
                        Social Buddy
                    </Typography>
                    <IconButton color="inherit" aria-label="account">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;