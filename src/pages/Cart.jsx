import React, { useState } from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {Container, Row, Col} from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { setDoc, doc } from 'firebase/firestore';

import { Link } from 'react-router-dom';
import {v4} from 'uuid';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQty = useSelector((state) => state.cart.totalQuantity);

  return (
    <Helmet title='Cart'>
      <CommonSection title='Корзина' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length===0 ? (
                <h2 className='fs-4 text-center'>Ни один товар не добавлен в корзину</h2>
              ) : (
                <table className="table bordered">
                <thead>
                  <tr>
                    <th>Картинка</th>
                    <th>Название продукта</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item, index)=>(
                      <Tr item={item} key={index} />
                    ))
                  }
                </tbody>
                </table>
              )}

            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Общая цена
                  <span className='fs-4 fw-bold'>{totalAmount} KZT</span>
                </h6>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Общее количество
                  <span className='fs-4 fw-bold'>{totalQty} шт</span>
                </h6>
              </div>
              <p className='fs-6 mt-2'>доставка бесплатно</p>
              <div>
                <button className="buy__btn w-100">
                  <Link to='/checkout'>
                    Заказать
                  </Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to='/shop'>
                    Продолжить покупку
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({item})=> {

  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return <tr>
    <td>
      <img src={item.imgUrl} alt="" />
    </td>
    <td>{item.productName}</td>
    <td>{item.price} KZT</td>
    <td>{item.quantity} шт</td>
    <td>
      <motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct} className="ri-delete-bin-line"></motion.i>
    </td>
  </tr>
}

export default Cart