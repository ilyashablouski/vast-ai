import { IFormFieldParams } from '@components/SignForm/types.ts';
import * as yup from 'yup';

export const formFields: IFormFieldParams[] = [
  {
    type: 'email',
    name: 'email',
    id: 'emailInput',
    label: 'Email',
    placeholder: 'Your company email',
    defaultValue: '',
  },
  {
    type: 'text',
    name: 'password',
    id: 'passwordInput',
    label: 'Password',
    placeholder: 'Create secure password',
    defaultValue: '',
  },
  {
    type: 'tel',
    name: 'phone',
    id: 'phoneInput',
    label: 'Phone number',
    placeholder: 'Your company phone number',
    defaultValue: '',
  },
];

export const phoneRegExp = /^(|(\+?[1-9]\d{7,14}))$/;

const schemaFieldsValidation = {
  email: yup.string().email('Incorrect email').required('Required field'),
  password: yup.string().required('Required field'),
  phone: yup.string().matches(phoneRegExp, 'Invalid phone number'),
};

export const yupSchema = yup.object().shape(schemaFieldsValidation);
