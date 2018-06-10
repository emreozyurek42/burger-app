import React from 'react';
import Bux from '../../hoc/bux';
import classes from './Layout.css';

export default (props) => {
  return (
    <Bux>  
         <div>
            Toolbar, SideDrawer, BackDrop
         </div>
        <main className={classes.Content}>
            {props.children}
       </main>
    </Bux>
  )
}
