import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

  const { data: ordersData, loading: ordersLoading } = useGetData('orders');

  const navigate = useNavigate(); 

  const navigateToOrderedProducts =()=>{
    navigate("/dashboard/orderedProducts");
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Имя пользователя</th>
                  <th>Заказанные продукты</th>
                  <th>email</th>
                  <th>Номер телефона</th>
                  <th>Адрес</th>
                  <th>Город</th>
                  <th>Страна</th>
                  <th>Общее количество</th>
                  <th>Общая сумма</th>
                </tr>
              </thead>
              <tbody>
                {ordersLoading ? (
                  <h4 className='py-5 text-center fw-bold'>Загрузка...</h4>
                ) : (
                    ordersData.map(orders => (
                    <tr key={orders.id}>
                      <td>{orders.name}</td>
                      <td>
                        <button
                          onClick={() => {
                            navigateToOrderedProducts()
                          }}
                          className='btn btn-link'
                        >
                          Посмотреть
                        </button>
                      </td>
                      <td>{orders.email}</td>
                      <td>{orders.phoneNumber}</td>
                      <td>{orders.address}</td>
                      <td>{orders.city}</td>
                      <td>{orders.country}</td>
                      <td>{orders.totalQty} шт</td>
                      <td>{orders.totalAmount} KZT</td>
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

export default Orders