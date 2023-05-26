
import { Form, Icon } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHouse, faPhone, faLaptop, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

interface FormProps {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    icon: IconProp;
}
const FormInput: React.FC<FormProps> = ({ label, type, id, placeholder, icon }) => {
    const [input, setInput] = useState('')

    return (
        <Form.Field backgroundColor='gunmetal' pr={2} pl={2}>
            <Form.Label textColor='flash-white' backgroundColor='gunmetal'>{label}</Form.Label>
            <Form.Control backgroundColor='gunmetal'>
                <Form.Input
                    color='danger'
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    
                />
                <Icon align="left" size="small">
                    <FontAwesomeIcon icon={icon} color='black' />
                </Icon>
                <Icon align="right" size="small">
                    <FontAwesomeIcon icon={faCheck} />
                </Icon>
            </Form.Control>
            {label.length <= 0 ? <span></span> : <Form.Help color="danger">{label} cannot be empty</Form.Help>}

        </Form.Field>
    )
}
export default FormInput;