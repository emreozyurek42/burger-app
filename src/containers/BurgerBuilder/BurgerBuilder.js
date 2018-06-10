import React, { Component } from 'react'
import Bux from '../../hoc/bux';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
  render() {
    return (
      <Bux>
          <Burger />
          <div>Build Controls</div>         
      </Bux>
    )
  }
}
