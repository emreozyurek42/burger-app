import React, { Component } from 'react';
import Bux from '../../../hoc/bux';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('update');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    })

    return (<Bux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={this.props.purcaseCancelled}>CANCEL</Button>
      <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Bux>
    );
  }
}

