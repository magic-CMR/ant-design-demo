import React, { Component } from 'react'
import './content.css'
import Orders from '../Orders/Orders'
import OrderCompleted from '../OrderCompleted/OrderCompleted'
import Dishes from '../Dishes/Dishes'
import DishesNew from '../DishesNew/DishesNew'

import {
  HashRouter as Router,
  Route
 } from 'react-router-dom'

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-header">
        </div>
        <div className="content-main">
          <Router>
            <div className="content-main-page">
              <Route exact path='/dashboard/orders' component={Orders}/>
              <Route path='/dashboard/orders/completed' component={OrderCompleted} />
              <Route exact path='/dashboard/dishes' component={Dishes}/>
              <Route path='/dashboard/dishes/new' component={DishesNew} />
            </div>
            </Router>
        </div>
      </div>
    )
  }
}

export default Content
