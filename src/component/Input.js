import React from 'react';
import { Input, Select } from 'antd';
import FormItem from './FormItem';
const { Option } = Select;

const Test = ({
    type,
    label,
    required,
    placeholder,
    option,
    meta,
    input
}) => {
    return (<div>
        <FormItem label={label} meta={meta} required={required}>
            {
                type === 'input' && <Input
                    size='small'
                    {...input}
                    value={input.value || ""}
                    placeholder={placeholder} />
            }
            {
                type === 'select' && <Select
                    size='small'
                    {...input}
                    value={input.value || ""}
                    placeholder={placeholder} >
                    {option.map((item, index) => {
                        return <Option value={item.value} key={index}>{item.label}</Option>
                    })}
                </Select>
            }
        </FormItem>

    </div>)
}

export default Test