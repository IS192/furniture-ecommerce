import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';

import useGetData from '../custom-hooks/useGetData';

import '../styles/home.css';

const Home = () => {

  const { data: products, loading } = useGetData('products')

  const [chairProducts, setChairProducts] = useState([]);
  const [sofaProducts, setSofaProducts] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [watchProducts, setWatchProducts] = useState([]);
  
  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredChairProducts = products.filter(
      item => item.category === 'chair'
    );
    
    const filteredSofaProducts = products.filter(
      item => item.category === 'sofa'
    );
    
    const filteredTableProducts = products.filter(
      item => item.category === 'table'
    );
    
    const filteredWirelessProducts = products.filter(
      item => item.category === 'wireless'
    );
    
    const filteredWatchProducts = products.filter(
      item => item.category === 'watch'
    );
    
    setChairProducts(filteredChairProducts);
    setSofaProducts(filteredSofaProducts);
    setTableProducts(filteredTableProducts);
    setWirelessProducts(filteredWirelessProducts);
    setWatchProducts(filteredWatchProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero__subtitle">Трендовый продукт в {year}</p>
                <h2>Сделайте свой интерьер более минималистичным и современным </h2>
                <p>Сделайте свой интерьер более минималистичным и современным.</p>
                <motion.button whileTap={{scale: 1.1}} className="buy__btn">
                  <Link to='/shop'>
                    Купить сейчас
                  </Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>
                Cтулы
              </h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Загрузка...</h5> : <ProductsList data={chairProducts} />
            }
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>
                Диваны
              </h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Загрузка...</h5> : <ProductsList data={sofaProducts}/>
            }
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">Столы</h2>
            </Col>
            {
              loading ? (
                <h5 className='fw-bold'>Загрузка...</h5>
              ) : (
                <ProductsList data={tableProducts} />
              )
            }
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Ограниченные предложения</h4>
                <h3 className='text-white fs-5 mb-3'>Качественное кресло</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale: 1.1}} className="buy__btn store__btn">
                <Link to='/shop/'>Посетить магазин</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      
      <section className='popular__category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">Часы</h2>
              <h2 className="section__title"></h2>
            </Col>
            {
              loading ? (
                <h5 className='fw-bold'>Загрузка...</h5>
              ) : (
                <ProductsList data={watchProducts} />
              )
            }
          </Row>
        </Container>
      </section>
      
      <section className='popular__category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">Аксессуары</h2>
              <h2 className="section__title"></h2>
            </Col>
            {
              loading ? (
                <h5 className='fw-bold'>Загрузка...</h5>
              ) : (
                <ProductsList data={wirelessProducts} />
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home