import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData';

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const Users = () => {
    const {data:usersData, loading} = useGetData('users');

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, 'users', id))
        toast.success('Пользователь удален!')
    }

  return <section>
    <Container>
        <Row>
            <Col lg='12'><h4 className='fw-bold'>Пользователи</h4></Col>
            <Col lg='12' className='pt-5'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Картинка</th>
                            <th>Имя пользователя</th>
                            <th>Email</th>
                            <th>Дейстивие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <h5 className='pt-5 fw-bold'>Загрузка...</h5> : usersData?.map(user=>(
                                <tr key={user.uid}>
                                    <td><img src={user.photoURL} alt="" /></td>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => {
                                                deleteUser(user.uid);}}
                                                className='btn btn-danger'>
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Col>
        </Row>
    </Container>
  </section>
  
}

export default Users