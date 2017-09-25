import React, { Component } from 'react'
import './sidebar.css'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sidebar extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">
        吮指后台
        </div>
        <div className="sidebar-content">
          <Menu
            onClick={this.handleClick}
            style={{ width: 240 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="file" /><span>订单管理</span></span>}>
                <Menu.Item key="1">  <Link to='/dashboard/orders'>待发货</Link> </Menu.Item>
                <Menu.Item key="2">  <Link to='/dashboard/orders/completed'>已完成</Link> </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="file" /><span>甜点管理</span></span>}>
              <Menu.Item key="5">  <Link to='/dashboard/dishes'>所有甜点</Link> </Menu.Item>
              <Menu.Item key="6">  <Link to='/dashboard/dishes/new'>新建甜点</Link> </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-footer-logout">登出</div>
          <div className="sidebar-footer-admin">admin</div>
        </div>
      </div>
    )
  }
}

export default Sidebar
