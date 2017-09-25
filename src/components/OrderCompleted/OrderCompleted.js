import React, { Component } from 'react'
import './ordercompleted.css'
import { Table, Icon } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  firstName: '黑森林',
  time: '2017-09-24 17:30:52',
  Name: 'happypeter',
}, {
  key: '2',
  firstName: '提拉米苏',
  time:'2017-09-24 17:30:52',
  Name: 'billie',
}];

class OrderCompleted extends Component {
  render() {
    return (
      <div className="order-completed">
      OrderCompleted
      <div>
      共2条订单
      </div>
      <Table dataSource={data}>
        <Column
          title="菜品名称"
          dataIndex="firstName"
          key="firstName"
        />
        <Column
          title="下单时间"
          dataIndex="time"
          key="time"
        />
        <Column
          title="顾客名"
          dataIndex="Name"
          key="Name"
        />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <span>
              <a href="#">操作</a>
            </span>
          )}
        />
      </Table>
      </div>
    )
  }
}

export default OrderCompleted
