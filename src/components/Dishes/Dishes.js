import React, { Component } from 'react'
import './dishes.css'
import { Table, Icon } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  poster:'2',
  firstName: '黑森林',
  describe: '好吃',
  Price: '11',
}, {
  key: '2',
  poster:'3',
  firstName: '提拉米苏',
  describe:'不贵',
  Price: '12',
}];
class Dishes extends Component {
  render() {
    return (
      <div className="dishes">
      Dishes
      <div>
      共0条订单
      </div>
      <Table dataSource={data}>
        <Column
          title="海报"
          dataIndex="poster"
          key="poster"
        />
        <Column
          title="菜品名称"
          dataIndex="firstName"
          key="firstName"
        />
        <Column
          title="描述"
          dataIndex="describe"
          key="describe"
        />
        <Column
          title="价格"
          dataIndex="Price"
          key="Price"
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

export default Dishes
