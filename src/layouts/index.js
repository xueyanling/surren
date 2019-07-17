import React, { Component } from 'react';
import styles from './index.css'
import router from 'umi/router'
import { Layout, Menu, Icon ,Input , Avatar,Popover, Button,LocaleProvider ,Select } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;
class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
    return (
      <LocaleProvider locale={en_US}>
      <Layout className={styles.wrapper}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
          <div className={styles.logo} >突发预警 </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} mode="vertical">
            <Menu.Item key="1" onClick={()=>this.handle()}>
              <Icon type="user" />
              <span>整体态势</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={()=>this.handleContent()}>
              <Icon type="upload" />
              <span>内容监测</span>
            </Menu.Item>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="setting" />
                  <span>群组监测</span>
                </span>
              }
            >
              <Menu.Item key="9">账号行为</Menu.Item>
              <Menu.Item key="10">群组特征</Menu.Item>
            </SubMenu>
            
            <Menu.Item key="4">
              <Icon type="user" />
              <span>监测配置</span>
            </Menu.Item>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="setting" />
                  <span>采集配置</span>
                </span>
              }
            >
              <Menu.Item key="9">账号管理</Menu.Item>
              <Menu.Item key="10">群组管理</Menu.Item>
              <Menu.Item key="11">采集关键词</Menu.Item>
              <Menu.Item key="12">运行监控</Menu.Item>
              <Menu.Item key="13">辅助加群</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={
                <span>
                  <Icon type="setting" />
                  <span>系统管理</span>
                </span>
              }
            >
              <Menu.Item key="9">用户管理</Menu.Item>
              <Menu.Item key="10">部门管理</Menu.Item>
              <Menu.Item key="11">角色管理</Menu.Item>
              <Menu.Item key="12">功能管理</Menu.Item>
              <Menu.Item key="13">操作日志</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.head} style={{ background: '#526b86', padding: 0 ,display:'flex' }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className={styles.headRight}>
              <Search
                placeholder="搜索"
                onSearch={value => console.log(value)}
                style={{ width: 200 , height:38 }}
              />     
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px',background:'rgb(82, 107, 134)',marginLeft:10 }}
              >
                <Menu.Item key="1">
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>Nick</Avatar>
                  <Popover className={styles.choose} placement="bottomRight" title='退出登录' trigger="click">
                    <Button>Nick</Button>
                  </Popover>
                </Menu.Item>
                <Menu.Item key="2">
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={()=>this.handleChange}>
                  <Option value="en">英文</Option>
                  <Option value="cn">中文</Option>
                  <Option value="fr">法文</Option>
                </Select>
                </Menu.Item>
              </Menu>
            </div>
            
          </Header>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
      </LocaleProvider>
    );
  }
  handle(){
      router.push('/situation')
  }
  handleContent(){
    router.push('/content_testing')
  }
  handleChange(value){
    console.log(value)
  }
}

export default BasicLayout;
