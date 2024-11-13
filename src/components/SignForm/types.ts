import { ControllerRenderProps, FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';

export type HookFormType = UseFormReturn<ISignFormSubmit>;
export type HookFormErrorType = FieldErrors;
export type HookFormFieldType = ControllerRenderProps<FieldValues, string>;
export type FormValuesType = Record<string, IFormFieldParams['defaultValue']>;

export interface IFormFieldParams {
  type: string;
  name: keyof ISignFormSubmit;
  id: string;
  label: string;
  placeholder?: string;
  defaultValue: string;
}

export interface ISignFormSubmit {
  email: string;
  password: string;
  phone?: string;
}
