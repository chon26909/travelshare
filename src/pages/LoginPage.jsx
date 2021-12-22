import { useState, useRef } from 'react';
import "../styles/login.css"
import { Container, Form, Button, Header } from 'semantic-ui-react';

const LoginPage = () => {

    const email = useRef(null);
    const password = useRef(null);

    const [loadingLogin, setloadingLogin] = useState(false)

    const submitLogin = (e) => {
        e.preventDefault();
        console.log("email", email.current.value);
        console.log("password", password.current.value);
        setloadingLogin(true)
    }

    return (
        <div className='login-page'>
            <Container text>
            <Header as='h1'>Login </Header>
                <Form size='big'  onSubmit={submitLogin}>
                    {/* <Form.Field required={true}>
                        <label>Email</label>
                        <input type='email' placeholder='xxxxX@gmail.com' required/>
                    </Form.Field>
                    <Form.Field required={true}>
                        <label>Password</label>
                        <input type='password' placeholder='********' required/>
                    </Form.Field> */}
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        label='Username'
                        placeholder='xxxxx@gmail.com'
                        required={true}
                        input={email}
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
                        type='password'
                        placeholder='xxxxxxxx'
                        required={true}
                        input={password}
                    />
                    <Button loading={loadingLogin} type='submit' fluid size='big' color='violet'>Login</Button>
                </Form>
            </Container>
        </div>

    )
}

export default LoginPage
