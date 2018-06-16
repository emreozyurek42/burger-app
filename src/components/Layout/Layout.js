import React, { Component } from 'react';
import Bux from '../../hoc/bux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export default class Layout extends Component {

  state ={
    showSideDrawer: false
  }
   
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
      this.setState((prevState) => {
      return  {showSideDrawer: !prevState.showSideDrawer}
      });
  }

  render() {
    return (
      <Bux>
        <div>
          <Toolbar DrawerToggleClicked= {this.sideDrawerToggleHandler} />
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
        </div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Bux>
    )
  }
}