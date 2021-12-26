import { useState, useRef } from 'react';
import "../styles/login.css"
import { Container, Form, Button, Header } from 'semantic-ui-react';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loadingLogin, setloadingLogin] = useState(false)

    const submitLogin = (e) => {

        if (loadingLogin) return 

        e.preventDefault();
        console.log("email", email);
        console.log("password", password);
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
                        label='Email'
                        placeholder='xxxxx@gmail.com'
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
                        type='password'
                        placeholder='xxxxxxxx'
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button loading={loadingLogin} type='submit' fluid size='big' color='violet'>Login</Button>
                </Form>
            </Container>
        </div>

    )
}

export default LoginPage
