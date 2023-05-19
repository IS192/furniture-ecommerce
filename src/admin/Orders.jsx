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
                  <th>Адрес</th>
                  <th>Город</th>
                  <th>Страна</th>
                  <th>email</th>
                  <th>Имя</th>
                  <th>Номер телефона</th>
                  <th>Общая сумма</th>
                  <th>Общее количество</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h4 className='py-5 text-center fw-bold'>Загрузка...</h4>
                ) : (
                    ordersData.map(item=>(
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.country}</td>
                      <td>{item.totalQty}</td>
                      <td>{item.totalAmount}</td>
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