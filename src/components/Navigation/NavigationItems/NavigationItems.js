import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default () => {
  return (
    <div>
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/" active>Burger Builder </NavigationItem>
          <NavigationItem link="/">Checkout </NavigationItem>
          
        </ul>
    </div>
  )
}
