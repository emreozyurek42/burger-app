import React from 'react';

import classes from './Modal.css';
import Bux from '../../../hoc/bux';
import Backdrop from '../Backdrop/Backdrop';

export default (props) => {
  return (
      <Bux>
          <Backdrop show={props.show} clicked={props.modalClosed}/>
          <div className={classes.Modal} style={{transform:props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity:props.show ? '1' : '0'}}>
           {props.children}
        </div>
    </Bux>
  )
}
