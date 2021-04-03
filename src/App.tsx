import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { TournamentList } from './components/tournament/tournamentList';
import { TournamentCreate } from './components/tournament/tournamentCreate';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


interface ComponentDictionary {
  [name: string]: any;
}
const mainComponents: ComponentDictionary = {
  tournamentList: <TournamentList />,
  tournamentCreate: <TournamentCreate />
};

function App() {
  const [currentComponent, setCurrentComponent] = useState("..");
  return (

    <div className="App">
      <Router>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Saiymant Aplication</Menu.Item>
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
             
                  <Menu.Item key="1" onClick={() => setCurrentComponent("tournamentCreate")}>   <Link to="/tournamentCreate"><span>Create Tournament</span></Link></Menu.Item>
                  <Menu.Item key="2" onClick={() => setCurrentComponent("tournamentList")}><Link to="/tournamentList"><span>List Tournament</span></Link></Menu.Item>
   
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
              <Switch>
                <Route path="/tournamentList">
                  <TournamentList />
                </Route>
                <Route path="/tournamentCreate">
                  <TournamentCreate component to render in the content div />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
