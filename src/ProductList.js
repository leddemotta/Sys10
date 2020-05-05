import React, {useState} from 'react';
import { Modal, Button, Row, Col, InputNumber } from 'antd';

const ProductList = ({products}) => {

    const [product, setProduct] = useState({});
    const [visible, setVisible] = useState(false);

    const showModal = product => {
        setVisible(true);
        setProduct(product);
    };

    const handleOk = e => {
        setVisible(false);
    };

    const handleCancel = e => {
        setVisible(false);
    };

    const onChange = (value) => {
        console.log('changed', value);
    }
  
    return (
        <>
            <Row gutter={[21, 50]}>

                {products.map(product =>
                    <Col className="product-box" onClick={() => showModal(product)} span={5}>
                        <div className="img"> <img src={product.imagem} alt={product.nome} /> </div>
                        <div className="infos">
                            <h2>{product.nome}</h2>
                            <span className="price">R$ {product.preco}</span>
                        </div>
                    </Col>
                )}
            </Row>

            <Modal
                title="Detalhes do Produto"
                visible={visible}
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
                closeIcon={<><img src="./fechar.svg" alt='fechar'/></>}
                className={"product-detail id-" + product.id}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className="img"> <img src={product.imagem} alt={product.nome} /> </div>
                <div className="infos">
                    <span className="title"> {product.nome} </span>
                    <span className="desc"> {product.descricao} </span>
                    <span className="price">R$ {product.preco}</span>
                </div>
            </Modal>
        </>
    )
}

export default ProductList;