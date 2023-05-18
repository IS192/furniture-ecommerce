import React, {useState} from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import '../styles/shop.css';

const Shop = () => {
  const [productsData, setProductsData] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === 'sofa') {
      const filteredProducts = products.filter(item=> item.category==='sofa')
      setProductsData(filteredProducts)
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter(item=> item.category==='mobile')
      setProductsData(filteredProducts)
    }

    if (filterValue === 'chair') {
      const filteredProducts = products.filter(item=> item.category==='chair')
      setProductsData(filteredProducts)
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter(item=> item.category==='watch')
      setProductsData(filteredProducts)
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter(item=> item.category==='wireless')
      setProductsData(filteredProducts)
    }

  };

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }

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
          {/* <Col lg='3' md='6' className='text-end'>
          <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col> */}
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