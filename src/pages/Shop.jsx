import React, { useState, useEffect} from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import '../styles/shop.css';

import useGetData from '../custom-hooks/useGetData';

const Shop = () => {

  // 
    const { data: productsData, setProductsData } = useGetData('products')
    const [chair, setChairProducts] = useState([]);
    const [sofa, setSofaProducts] = useState([]);
    const [mobile, setMobileProducts] = useState([]);
    const [wireless, setWirelessProducts] = useState([]);
    const [watch, setWatchProducts] = useState([]);
    
    useEffect(() => {
      // Функция для фильтрации продуктов по категории
      const filterProductsByCategory = category => {
        return products.filter(item => item.category === category);
      };
  
      // Фильтрация продуктов при изменении состояния products
      const filteredChairProducts = filterProductsByCategory('chair');
      const filteredSofaProducts = filterProductsByCategory('sofa');
      const filteredMobileProducts = filterProductsByCategory('mobile');
      const filteredWirelessProducts = filterProductsByCategory('wireless');
      const filteredWatchProducts = filterProductsByCategory('watch');
  
      setChairProducts(filteredChairProducts);
      setSofaProducts(filteredSofaProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
      setWatchProducts(filteredWatchProducts);
    }, [products]);
  
  // 

  const handleFilter = e => {
    const selectedCategory = e.target.value;
    let filteredProducts = [];
  
    if (selectedCategory === 'sofa') {
      filteredProducts = sofa;
    } else if (selectedCategory === 'mobile') {
      filteredProducts = mobile;
    } else if (selectedCategory === 'chair') {
      filteredProducts = chair;
    } else if (selectedCategory === 'watch') {
      filteredProducts = watch;
    } else if (selectedCategory === 'wireless') {
      filteredProducts = wireless;
    } else {
      filteredProducts = products;
    }
  
    setProductsData(filteredProducts);
  };
  
  const handleSearch = e => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(
      item => item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  

  return <Helmet title='shop'>
    <CommonSection title='Продукты' />

    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Фильтровать по категории</option>
                <option value="sofa">Диваны</option>
                <option value="mobile">Мобильные телефоны</option>
                <option value="chair">Стулы</option>
                <option value="watch">Часы</option>
                <option value="wireless">Аксессуары</option>
              </select>
            </div>
          </Col>
          
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type='text' placeholder='Поиск...' onChange={handleSearch} />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    
    <section className='pt-0'>
      <Container>
        <Row>
          {productsData.length === 0? (
              <h1 className='text-center fs-4'>Товары не найдены</h1>
            ) : (
              <ProductsList data={productsData} />
          )}
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Shop