import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { useNavigate } from 'react-router-dom';

const OrderedProducts = () => {

  const { data: orderedProductsData, loading: orderedProductsLoading } = useGetData('orderedProducts');

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Имя пользователя</th>
                  <th>Название продукта</th>
                  <th>Количество</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {orderedProductsLoading ? (
                  <h4 className='py-5 text-center fw-bold'>Загрузка...</h4>
                ) : (
                    orderedProductsData.map(orderedProduct => (
                    <tr key={orderedProduct.id}>
                      <td>{orderedProduct.productUserName}</td>
                      <td>{orderedProduct.productName}</td>
                      <td>{orderedProduct.productQty} шт</td>
                      <td>{orderedProduct.productAmount} KZT</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default OrderedProducts