import React from 'react'
import AddFormUser from './AddFormUser';
import UpdateFormUser from './UpdateFormUser';

const Form = () => {
    const flag = false;
    return (
        <div>
            {flag ? <AddFormUser /> : <UpdateFormUser />}
        </div>
    )
}

export default Form
