import React from 'react';
import './index.css'

const FormItem = ({
    label,
    required,
    meta: {
        touched,
        error
    },
    children
}) => {
    return <div className='form-item'>
        {required && <span>*</span>}
        <span>{label}:</span>
        <span className='input'>
            {children}
        </span>
        {touched && error && <span>{error}</span>}
    </div>
}

export default FormItem 