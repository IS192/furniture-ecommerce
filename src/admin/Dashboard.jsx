import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../styles/dashboard.css';
import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {

  const {data: products} = useGetData('products');
  const {data: users} = useGetData('users');
  const {data: orders} = useGetData('orders');
  // const {data: orderedProducts} = useGetData('dashboard/orderedProducts');

  return <>
    <section>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className="order__box">
              <h5>Заказы</h5>
              <span>{orders.length}</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="products__box">
              <h5>Продукты</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="users__box">
              <h5>Пользователи</h5>
              <span>{users.length}</span>
            </div>
          </Col>  
        </Row>    
      </Container>
  </section>
  </>
}

export default Dashboard