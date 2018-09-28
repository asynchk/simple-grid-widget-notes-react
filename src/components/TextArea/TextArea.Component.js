import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

const InputField = ({ id, title, placeholder }) => (
  <Form>
    <h4>{title}</h4>
    <TextArea
      id={id}
      autoHeight
      placeholder={placeholder}
      style={{ minHeight: 60, fontWeight: 500, fontSize: '1.2rem' }}
    />
  </Form>
);

InputField.propTypes = {
  id: PropTypes.string.isReuqired,
  title: PropTypes.string.isReuqired,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: 'Try adding some conent',
};
export default InputField;
