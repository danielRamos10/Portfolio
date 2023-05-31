
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

    const onChangeHandler = (e: any) => {
        setInput(e.target.value)
    }

    return (
        <Form.Field backgroundColor='gunmetal'>
            <Form.Label textColor='flash-white' backgroundColor='gunmetal' >{label}</Form.Label>
            <Form.Control backgroundColor='gunmetal'>
                <Form.Input
                    color={`${input && input.length > 0 ? 'cyan' : 'flame'}`}
                    backgroundColor='flash-white'
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChangeHandler}

                />
                <Icon align="left" size="small">
                    <FontAwesomeIcon icon={icon} color='black' />
                </Icon>
                <Icon align="right" size="small">
                    <FontAwesomeIcon icon={faCheck} />
                </Icon>
            </Form.Control>
            {input && input.length > 0 ? <div style={{ marginTop: '2.1rem' }}></div> : <Form.Help color="flame">{label} cannot be empty</Form.Help>}

        </Form.Field>
    )
}
export default FormInput;