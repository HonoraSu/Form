import React, { Component } from 'react';
import * as yup from 'yup';
import { asyncValidate } from '../common/utils/asyncValidate';
import { compose } from 'recompose';
import Input from './Input';
import { reduxForm, Field } from 'redux-form';

const Form = () => {
    return (
        <form className='login'>
            <Field
                component={Input}
                type='text'
                name='name'
                label='name'
                required />
            <Field
                component={Input}
                type='select'
                name='sex'
                label='sex'
                option={[{ value: 'man', label: 'man' }, { value: 'woman', label: 'woman' }]} />
        </form>
    )
}
const schema = yup.object().shape({
    name: yup.string().required(),
    sex: yup.string().required()
})
export default compose(
    reduxForm({
        form: 'login',
        validate: (values) => {
            return asyncValidate(schema, values)
        }
    })
)(Form);
