import React from 'react';
import 'antd/dist/antd.css';
import './App.sass';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
import { Input } from 'antd';
import { Modal, Button } from 'antd';
import ProductList from './ProductList.js';

const { TabPane } = Tabs;
const callback = (key) => { }
const { Header, Sider, Content } = Layout;
const App = () => {


  return (


    <div className="produtos-sys10">


      <Layout style={{ paddingTop: '80px' }}>

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', top: '0' }}>
          <Row justify={"space-between"}>
            <Col className="logo" justify={"start"}  >
              <a href="/">
                <img src="./logo.svg" alt="Sys10" />
              </a>
            </Col>
            <Col className="search" justify={"end"}>
              <Input placeholder="Buscar por Produto" size="large" prefix={<><img src="./fechar.svg" /></>} style={{ width: 414 }} />
            </Col>
          </Row>
        </Header>


        <Layout style={{ paddingRight: '365px' }}>
          <Content>

            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Categoria 1" key="1">
                <ProductList />
              </TabPane>
              <TabPane tab="Categoria 2" key="2">
                <ProductList />
              </TabPane>
              <TabPane tab="Categoria 3" key="3">
                <ProductList />
              </TabPane>
            </Tabs>
          </Content>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              right: 0,
            }}
            width={365}
            breakpoint="lg"
            collapsedWidth="100%"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >


            <Row className="heading" justify={"space-between"}>
              <Col justify={"start"}  >
                <h3> Seu Pedido </h3>
              </Col>
              <Col justify={"end"}>
                <img src="./compras.svg" alt="compras" />
              </Col>
            </Row>


            <Row className="empty-cart" justify="space-around" align="middle">
              <Col span={14}>
                <img src="./carrinho-vazio.svg" alt="compras" />
                <br></br>
                Seu carrinho está vazio :(
              </Col>
            </Row>


          </Sider>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;
