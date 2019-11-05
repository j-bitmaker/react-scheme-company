import React from 'react';
import { ServiceConsumer } from '../context';

const withService = () => (Child) => {
    return props => (
            <ServiceConsumer>
            {
                service => (<Child {...props} 
                    service={service}/>)   
            }
            </ServiceConsumer>
        )
}

export default withService;