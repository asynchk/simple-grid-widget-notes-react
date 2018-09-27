import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const InputField = ({id, title, value}) => (
    <Form>
        <label>{title}</label>
        <TextArea
        id={id}
        // value={value}
        autoHeight
        placeholder='Try adding multiple lines'
        style={{ minHeight: 100 }} />
    </Form>
)

export default InputField;
