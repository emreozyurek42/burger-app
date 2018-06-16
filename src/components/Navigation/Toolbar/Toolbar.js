import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';

export default (props) => (
    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.DrawerToggleClicked} />
          <div className={classes.Logo}>
             <Logo />   
          </div>
        
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
