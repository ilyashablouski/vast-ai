import { IFormFieldParams } from '@components/SignForm/types.ts';
import * as yup from 'yup';

export const formFields: IFormFieldParams[] = [
  {
    type: 'email',
    name: 'email',
    id: 'emailInput',
    label: 'Email',
    defaultValue: '',
  },
  {
    type: 'text',
    name: 'password',
    id: 'passwordInput',
    label: 'Password',
    defaultValue: '',
  },
  {
    type: 'tel',
    name: 'phone',
    id: 'phoneInput',
    label: 'Phone number',
    defaultValue: '',
  },
];

const schemaFieldsValidation = {
  email: yup.string().email('Incorrect email').required('Required field'),
  password: yup.string().required('Required field'),
  phone: yup.string(),
};

export const yupSchema = yup.object(schemaFieldsValidation);
