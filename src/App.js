import React from 'react';
import './App.css';
import { Row, Col, AutoComplete } from 'antd';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const App = () => {



  return (
    <div className="App">


      <Layout>
        <Header>
        <a href="/" class="logo">
                <img src="./logo-sys10.png" alt="Sys10" />
            </a>
        </Header>
        <Layout t className="site-layout" style={{ padding: '0 32px' }}>
          <Content>Content</Content>
          <Sider
          width={365}
            breakpoint="lg"
            collapsedWidth="100%"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >Sider BBBBBBBBBBBBBBB </Sider>
        </Layout>
      </Layout>



    </div>
  );
}

export default App;
