import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear();

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
        <div className="logo">
            <div>
              <h1 className='text-white'>Furniture App</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
          Furniture-App - ваш идеальный интернет-магазин мебели! Мы предлагаем широкий ассортимент качественной мебели для всех комнат вашего дома по доступным ценам. Кроме этого вы можете покупать телефоны и аксессуары.
          </p>
        </Col>
        <Col lg='3' md='4' className='mb-4'>
          <div className='footer__quick-links'>
            <h4 className="quick__links-title">Топ категории</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Мобильные телефоны</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Современные диваны</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Кресло</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Умные часы</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2' md='3' className='mb-4'>
          <div className='footer__quick-links'>
          <h4 className="quick__links-title">Полезные ссылки</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Магазин</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Корзина</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Вход</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='1' className='mb-4'>
        <div className='footer__quick-links'>
          <h4 className="quick__links-title">Наши контакты</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className="ri-map-pin-line"></i></span>
                <p>Алматы, Казахстан</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className="ri-phone-line"></i></span>
                <p>+7(708)1234567</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className="ri-mail-line"></i></span>
                <p>furniture_app@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
          <p className="footer__copyright">Алматы {year}, разработан @IS-192. Все права защищены. </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer