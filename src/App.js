import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import './App.sass';
import ProductList from './ProductList'
import { Tabs, Input, Row, Col, Layout, InputNumber, Button  } from 'antd';

import api from './api.js';
const { TabPane } = Tabs;
const { Header, Sider, Content } = Layout;

const App = () => {
    const [products, setProducts] = useState([]);
    const [prevProducts, setPrevProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      api.get(`/categoria`).then(res => {
        setCategories(res.data);
        fetch(1);
      })
    }, []);

  const fetch = (id) => {
    api.get(`/categoria/${id}/produto`).then(res => {
      console.log(res, 'bbbbbbbbbbbbb')
      setProducts(res.data );
      setPrevProducts(res.data);
    });
  }

  const onChange = (value) => {
    console.log('changed', value);
  }
  
  const callback = (key) => { 
    fetch(key);
  }

  const handleSearch = e => {
    const filtered = products.filter(product => {
      return product.nome.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProducts(filtered);
    if(e.target.value == '') {
      setProducts(prevProducts);
    }
  };

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
              <Input placeholder="Buscar por Produto" onPressEnter={handleSearch} size="large" prefix={<><img src="./busca.svg" alt={'search'} /></>} style={{ width: 414 }} />
            </Col>
          </Row>
        </Header>

        <Layout style={{ paddingRight: '365px' }}>
          <Content>
            <Tabs defaultActiveKey="1" onChange={callback}>
              {categories.map(category => 
                <TabPane tab={category.nome} key={category.id}>
                  <ProductList products={products} />
                </TabPane>
              )}
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

            <ul className="wish-list">
              
              <li>
                <Row>
                  <Col>
                    <span className="img"> 
                      <img src="https://static.carrefour.com.br/medias/sys_master/images/images/hdd/h7d/h00/h00/12175674507294.jpg" width={50} alt="compras" /> 
                    </span>
                  </Col>
                  <Col span={12}>
                    <span className="infos"> 
                      <span className="title"> Fanta Laranja 350ml </span>
                      <span className="counter"> <InputNumber size="small" min={0} onChange={onChange} /> </span>
                    </span>
                  </Col>
                  <Col className="action" span={6}>
                    <span className="price"> R$5,50 </span>
                    <span className="remove"> Remover </span>
                  </Col>
                </Row>
              </li>


              <li>
                <Row>
                  <Col>
                    <span className="img"> 
                      <img src="https://static.carrefour.com.br/medias/sys_master/images/images/hdd/h7d/h00/h00/12175674507294.jpg" width={50} alt="compras" /> 
                    </span>
                  </Col>
                  <Col span={12}>
                    <span className="infos"> 
                      <span className="title"> Fanta Laranja 350ml </span>
                      <span className="counter"> <InputNumber size="small" min={0} onChange={onChange} /> </span>
                    </span>
                  </Col>
                  <Col className="action" span={6}>
                    <span className="price"> R$5,50 </span>
                    <span className="remove"> Remover </span>
                  </Col>
                </Row>
              </li>



              
            </ul>

            

            <Row className="wish-list-footer" justify="space-around">

              <Col className="subtotal" span={24}>
                <Row justify={"space-between"}>
                  <Col justify={"start"}>
                    <span className="line">Subtotal</span>
                    <span className="line">Frete</span>
                  </Col>
                  <Col justify={"end"}>
                    <span className="line price">R$31,50</span>
                    <span className="line shipping">Grátis</span>
                  </Col>
                </Row>
              </Col>

              <Col className="total" span={24}>
                <Row justify={"space-between"}>
                  <Col justify={"start"}  >
                    <span className="line">Total</span>
                  </Col>
                  <Col justify={"end"}>
                    <span className="line price">R$31,50</span>
                  </Col>
                </Row>
              </Col>

              <Col className="btn" span={24}>
                <Button type="primary" shape="round" size={"large"} block>
                Selecionar Pagamento
                </Button>
              </Col>

            </Row>

            {/*
            <Row className="empty-cart" justify="space-around" align="middle">
              <Col span={14}>
                <img src="./carrinho-vazio.svg" alt="compras" />
                <br></br>
                Seu carrinho está vazio :(
              </Col>
            </Row>*/
            }

          </Sider>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;