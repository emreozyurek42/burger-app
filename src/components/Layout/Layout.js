import React from 'react';
import Bux from '../../hoc/bux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

export default (props) => {
  return (
    <Bux>  
         <div>
            <Toolbar />
         </div>
        <main className={classes.Content}>
            {props.children}
       </main>
    </Bux>
  )
}
