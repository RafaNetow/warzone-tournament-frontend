import React from 'react';
import './App.css';
import { TournamentList } from './components/tournament/tournamentList';
import { TournamentCreate } from './components/tournament/tournamentCreate';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <TournamentCreate/>
      <TournamentList />
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Tournament">
            <Menu.Item key="1">Create Tournament</Menu.Item>
            <Menu.Item key="2">List Tournaments</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 500
              }}
            >
              {mainComponents[this.state.currentComponent]}
            </Content>
      </Layout>
    </Layout>
  </Layout>
    </div>
  );
}

export default App;
