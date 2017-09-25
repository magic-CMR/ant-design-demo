import React, { Component } from 'react'
import './sign-up.css'
import { Form, Icon, Input, Button } from 'antd'
import styled from 'styled-components'

const FormItem = Form.Item

const StyledButton = styled(Button)`
width: 100%;
`

class Signup extends Component {
  state = {
    username: '',
    password: ''
  }
  handleUsernameChange = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data ={
      username:this.state.username,
      password:this.state.password
    }
    this.props.onLogin(data)
  }
  render() {
    return (
      <div className="sign-up">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"
              onChange={this.handleUsernameChange}
              value={this.state.username}/>
          </FormItem>
          <FormItem>
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"
              onChange={this.handlePasswordChange}
              value={this.state.password}/>
          </FormItem>
          <FormItem>
            <StyledButton
              type="primary"  htmlType="submit"
               >
              登录
            </StyledButton>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Signup
