import React from 'react';
import AviasalesServiceContext from '../aviasales-service-context';

const WithAviasalesService = () => (Wrapped) => {
    return (props) => {
        return (
            <AviasalesServiceContext.Consumer>
                {
                    (AviasalesService) => {
                        return <Wrapped {...props} AviasalesService={AviasalesService} />
                    }
                }
            </AviasalesServiceContext.Consumer>
        )
    };
};

export default WithAviasalesService;