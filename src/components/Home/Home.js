import React, { Component } from 'react'
import './home.css'
import Signup from '../Signup/Signup'
import Settings from '../../settings.default.js'

import styled from 'styled-components'
const HomeWrap = styled.div`
    height: 100vh;
    padding-top:80px;
`
const FormWrap = styled.div`
    border: 1px solid #ddd;
    padding: 40px 10px 10px;
    max-width: 350px;
    margin: 0 auto;
`

class Home extends Component {
  login = (data) => {
    console.log(data)
    if (data.password !== Settings.user.password || data.username !== Settings.user.username) return
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div className="home">
         <HomeWrap>
          <FormWrap>
            <Signup onLogin={this.login}/>
          </FormWrap>
        </HomeWrap>
      </div>
    )
  }
}

export default Home
