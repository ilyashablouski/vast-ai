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

const schemaFieldsValidation = {};

export const yupSchema = yup.object(schemaFieldsValidation);
