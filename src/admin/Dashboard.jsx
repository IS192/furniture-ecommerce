import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../styles/dashboard.css';
import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {

  const {data: products} = useGetData('products');
  const {data: users} = useGetData('users');
  const {data: sales} = useGetData('sales');
  const {data: orders} = useGetData('orders');

  return <>
    <section>
      <Container>
        <Row>
          {/* <Col className="lg-3">
            <div className="revenue__box">
              <h5>Общий доход</h5>
              <span>{sales.length} KZT</span>
            </div>
          </Col> */}
          <Col className="lg-3">
            <div className="order__box">
              <h5>Заказы</h5>
              <span>{orders.length}</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="products__box">
              <h5>Добавленнные продукты</h5>
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