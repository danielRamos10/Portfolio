import React from 'react'
import { Form } from 'react-bulma-components';

interface FormTextAreaProps {
  message: string;
}
export const FormTextArea: React.FC<FormTextAreaProps> = ({ message }) => {
  return (
    <Form.Field>
      <Form.Label textColor='flash-white'>Message</Form.Label>
      <Form.Textarea
      backgroundColor='flash-white'
        placeholder={message}
      />
    </Form.Field>


  )
}
