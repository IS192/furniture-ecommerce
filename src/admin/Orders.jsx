import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';
import {toast} from 'react-toastify';

const Orders = () => {

  const { data: ordersData, loading } = useGetData('orders');

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Картинка</th>
                  <th>Имя</th>
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
                {loading ? (
                  <h4 className='py-5 text-center fw-bold'>Загрузка...</h4>
                ) : (
                    ordersData.map(product=>(
                    <tr key={product.id}>
                      <td>
                        <img src={product.imgUrl} alt="" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.email}</td>
                      <td>{product.phoneNumber}</td>
                      <td>{product.address}</td>
                      <td>{product.city}</td>
                      <td>{product.country}</td>
                      <td>{product.totalQty}</td>
                      <td>{product.totalAmount}</td>
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