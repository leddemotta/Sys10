import React from 'react';
import 'antd/dist/antd.css';
import './App.sass';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

//import { Tabs } from 'antd';

//const { TabPane } = Tabs;
//const callback = (key) => { }

import { Input } from 'antd';


const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <div className="produtos-sys10">

      <Layout>

        <Header>
          <Row justify={"space-between"}>
            <Col className="logo" justify={"start"}  >
              <a href="/">
                <img src="./logo-sys10.png" alt="Sys10" />
              </a>
            </Col>
            <Col className="search" justify={"end"}>
              <Input placeholder="Buscar por Produto" size="large" prefix={"SH"} style={{ width: 414 }} />
            </Col>
          </Row>
        </Header>

        <Layout>
          <Content style={{ padding: '0  0 0 32px' }}>Content</Content>
          <Sider
            style={{ padding: '0  32px 0 0' }}
            width={365}
            breakpoint="lg"
            collapsedWidth="100%"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          > AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </Sider>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;
