import React, { useState, useEffect } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import ProductsList from '../components/UI/ProductsList';
import '../styles/shop.css';
import useGetData from '../custom-hooks/useGetData';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: productsData, loading } = useGetData('products');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filtered = productsData.filter((product) => {
    const titleMatch = product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return searchQuery.length === 0 || titleMatch || categoryMatch;
  });
  

  useEffect(() => {
    if (!loading && productsData !== undefined) {
      const filtered = productsData.filter((product) => {
        if (searchQuery.length !== 0) {
          return (
            product.title &&
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (product.category &&
              product.category.toLowerCase().includes(searchQuery.toLowerCase()))
          );
        } else if (selectedCategory.length !== 0) {
          return (
            product.category &&
            product.category.toLowerCase() === selectedCategory.toLowerCase()
          );
        } else {
          return true;
        }
      });
  
      setFilteredProducts(filtered);
    }
  }, [searchQuery, selectedCategory, productsData, loading]);
  

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setSelectedCategory(filterValue === '' ? '' : filterValue.toLowerCase());
  };
  

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase(); // Приводим к нижнему регистру
    setSearchQuery(value);
  };
  

  return (
    <Helmet title="shop">
      <CommonSection title="Продукты" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select value={selectedCategory} onChange={handleFilter}>
                  <option value="">Все категории</option>
                  <option value="sofa">Диваны</option>
                  <option value="mobile">Мобильные телефоны</option>
                  <option value="chair">Стулы</option>
                  <option value="watch">Часы</option>
                  <option value="wireless">Аксессуары</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {loading ? (
              <h1 className="text-center fs-4">Загрузка...</h1>
            ) : filteredProducts.length === 0 ? (
              <h1 className="text-center fs-4">Товары не найдены</h1>
            ) : (
              <ProductsList data={filteredProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
