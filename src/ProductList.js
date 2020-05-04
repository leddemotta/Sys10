import React from 'react';
import { Modal, Button, Row, Col, InputNumber } from 'antd';
import API from './api.js';

export default class ProductList extends React.Component {

    state = {
        products: [],
        categories: [],
        visible: false
    }

    

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        API.get(`/produto`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render() {

        function onChange(value) {
            console.log('changed', value);
        }

        console.log(this.showModal);
        //  {this.state.products.slice(0, 1).map(product =>

        return (
            <>
                {this.state.categories.map(category => <> {category.nome} </>  )}



                <Row gutter={[21, 50]}>

                    {this.state.products.slice(0, 1).map(product =>
                        
                        <Col className="product-box" onClick={this.showModal} span={5}>
                            <div className="img"> <img src={product.imagem} alt={product.nome} /> </div>
                            <div className="infos">
                                <h2>{product.nome}</h2>
                                <span className="price">R$ {product.preco}</span>
                            </div>
                            <Modal
                                title="Detalhes do Produto"
                                visible={this.state.visible}
                                width={358}
                                footer={<>
                                    <Row justify={"space-between"}>
                                        <Col justify={"start"}  >
                                            <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
                                        </Col>
                                        <Col justify={"end"}>
                                            <Button type="primary" shape="round" size={"large"}> Adicionar ao Carrinho </Button>
                                        </Col>
                                    </Row>

                                </>}
                                closeIcon={<><img src="./fechar.svg" /></>}
                                className={"product-detail id-" + product.id}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <div className="img"> <img src={product.imagem} alt={product.nome} /> </div>
                                <div className="infos">
                                    <span className="title"> {product.nome} </span>
                                    <span className="desc"> {product.descricao} </span>
                                    <span className="price">R$ {product.preco}</span>
                                </div>
                            </Modal>
                        </Col>
                    )}
                </Row>
            </>
        )
    }
}