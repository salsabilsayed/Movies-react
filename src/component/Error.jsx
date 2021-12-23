import React from 'react';

import './Error.css';

const Error = (props) => {
    return (
        <p className='error py-2'>{props.children}</p>
    )
}

export default Error;
