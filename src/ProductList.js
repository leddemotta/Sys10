import React from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import { Modal, Button } from 'antd';
//import API from '../api';

export default class ProductList extends React.Component {

    state = {
        persons: [],
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
        axios.get(`http://5eab0478a280ac00166570ca.mockapi.io/api/produto`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <>
                <Row gutter={[21, 50]}>
                    {this.state.persons.map(person =>
                        <Col className="product-box" onClick={this.showModal} span={5}>
                            <div className="img"> <img src={person.imagem} alt="Sys10" /> </div>
                            <div className="infos">
                                <h2>{person.nome}</h2>
                                <span className="price">R$ {person.preco}</span>
                            </div>
                            <Modal
                                    title="Detalhes do Produto"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <div className="img"> <img src={person.imagem} alt="Sys10" /> </div>
                                    <div className="infos">
                                        <h2>{person.nome}</h2>
                                        
                                        <span className="desc">R$ {person.descricao}</span>
                                        <span className="price">R$ {person.preco}</span>
                                    </div>
                                </Modal>
                        </Col>
                    )}
                </Row>
            </>
        )
    }
}