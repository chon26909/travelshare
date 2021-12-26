import React from 'react'
import { Container } from 'semantic-ui-react'
import spinner from '../../assets/images/loading/Ball.gif'
import './loading.css'

const LoadingPage = () => {
    return (
        <div>
            <Container>
                <div className='spinner-center'>
                    <img src={spinner} alt="loading page"  />
                </div>
            </Container>
        </div>
    )
}

export default LoadingPage
