import React from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
//import API from '../api';

export default class ProductList extends React.Component {

    state = {
        persons: []
    }

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
                        <Col className="product-box" span={5}>
                            <div className="img"> <img src={person.imagem} alt="Sys10" /> </div>
                            <div className="infos">
                                <h2>{person.nome}</h2>
                                <span className="price">R$ {person.preco}</span>
                            </div>
                        </Col>
                    ) }
                </Row>
            </>
        )
    }
}