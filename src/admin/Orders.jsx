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
                    ordersData.map(product=>(
                    <tr key={product.id}>
                      <td>{product.name}</td>
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
                      <td>{product.email}</td>
                      <td>{product.phoneNumber}</td>
                      <td>{product.address}</td>
                      <td>{product.city}</td>
                      <td>{product.country}</td>
                      <td>{product.totalQty} шт</td>
                      <td>{product.totalAmount} KZT</td>
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