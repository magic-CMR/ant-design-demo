import React, { Component } from 'react'
import './dishesnew.css'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '名称' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="名称" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '描述' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="描述" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '价格' }],
          })(
            <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />} type="password" placeholder="价格" />
          )}
        </FormItem>
        <FormItem>

          <Button type="primary" htmlType="submit" className="login-form-button">
            添加甜点
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
class DishesNew extends Component {
  render() {
    return (
      <div className="dishes-new">
        <div className="dishes-new-control-warpper">
          <div>
            <laybel className="dishes-new-control">
              <input type="file" className="dishes-new-control-input"/>
              <Button>上传海报</Button>
            </laybel>
          </div>

        </div>

        <WrappedNormalLoginForm />
      </div>
    )
  }
}

export default DishesNew
