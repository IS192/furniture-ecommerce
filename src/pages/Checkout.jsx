import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { setDoc, doc } from 'firebase/firestore';

import {v4} from 'uuid';

const Checkout = () => {
	const totalQty = useSelector((state) => state.cart.totalQuantity);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const [name, setName] = useState('');
  	const [email, setEmail] = useState('');
  	const [phoneNumber, setPhoneNumber] = useState('');
  	const [address, setAddress] = useState('');
  	const [city, setCity] = useState('');
  	const [country, setCountry] = useState('');

	const newOrderId = v4();
	const newOrderName = `new_order_${newOrderId}`;

	console.log(`name: ${name}`);
	console.log(`email: ${email}`);
	console.log(`phoneNumber: ${phoneNumber}`);
	console.log(`address: ${address}`);
	console.log(`city: ${city}`);
	console.log(`country: ${country}`);

	console.log(`totalQty: ${totalQty}`);
	console.log(`totalAmount: ${totalAmount}`);
  
	const order = async (e) => {
		e.preventDefault();

		try {
			await setDoc(doc(db, 'orders', newOrderName), {
				name,
				email,
				phoneNumber,
				address,
				city,
				country,
				totalQty,
				totalAmount,
      		});

			toast.success('Ваш заказ был завершен успешно');
		} catch (error) {
			toast.error('Ошибка! Ваш заказ не завершен!');
			console.log(error);
		}
	};

	return (
		<Helmet title='Checkout'>
			<CommonSection title='Страница заказа' />
			<section>
				<Container>
					<Row>
						<Col lg='8'>
							<h6 className='mb-4 fw-bold'>Платежная информация</h6>
							<Form className='billing__form'>
								<FormGroup className='form__group'>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  placeholder='Введите ваше имя'
                  required
                />
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setEmail(e.target.value)}
										type='email'
										placeholder='Адрес электронной почты'
										required
									/>
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setPhoneNumber(e.target.value)}
										type='number'
										placeholder='Номер телефона'
										required
									/>
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setAddress(e.target.value)}
										type='text'
										placeholder='Адрес'
										required
									/>
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setCity(e.target.value)}
										type='text'
										placeholder='Город'
										required
									/>
								</FormGroup>
								{/* <FormGroup className="form__group">
                  <input type="text" placeholder='Postal code' required />
                </FormGroup> */}
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setCountry(e.target.value)}
										type='text'
										placeholder='Страна'
										required
									/>
								</FormGroup>
							</Form>
						</Col>
						<Col lg='4'>
							<div className='checkout__cart'>
								<h6>
									Общее количество: <span>{totalQty} items</span>
								</h6>
								{/* <h6>
									Subtotal: <span>{totalAmount} KZT</span>
								</h6> */}
								<h6>
                  <span>Доствака: <br /></span><span>0 KZT</span>
                </h6>
								<h4>
									Общая стоимость: <span>{totalAmount} KZT</span>
								</h4>
								<button
									type='submit'
									style={{
										background: 'white',
										color: 'var(--primary-color)',
										fontWeight: '600',
									}}
									className='buy_btn auth_btn w-100'
									onClick={order}
								>
									Заказать
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Checkout;