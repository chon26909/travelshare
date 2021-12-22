import React, { useState, useRef } from 'react';
import "../styles/login.css"

const LoginPage = () => {

    const email = useRef(null);
    const password = useRef(null);

    const submitLogin = (e) => {
        e.preventDefault();
        console.log("email",email.current.value);
        console.log("password",password.current.value);
    }

    return (
        <div className='container vh-100'>
            {/* <h1 className='pt-5 text-center'>ลงชื่อเข้าใช้</h1>
            <Form className='form-login mx-auto pt-3' onSubmit={(e) => submitLogin(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>อีเมล</Form.Label>
                    <Form.Control type="email" ref={email} placeholder="xxxxx@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control type="password" ref={password} placeholder="********" />
                </Form.Group>
                <div className='d-grid'>
                    <Button variant="primary" type="submit">
                        ลงชื่อเข้าใช้
                    </Button>
                </div>
            </Form> */}
        </div>
    )
}

export default LoginPage
