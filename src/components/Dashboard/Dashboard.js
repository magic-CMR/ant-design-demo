import React, { Component } from 'react'
import './dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
          <Sidebar />
          <Content />
      </div>
    )
  }
}

export default Dashboard
