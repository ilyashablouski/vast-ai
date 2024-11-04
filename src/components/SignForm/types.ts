import { ControllerRenderProps, FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';
//ToDo: Remove if no needed
// import { UseMutationResult } from '@tanstack/react-query/src/types';
// import { AxiosError } from 'axios';

export type HookFormType = UseFormReturn;
export type HookFormErrorType = FieldErrors;
export type HookFormFieldType = ControllerRenderProps<FieldValues, string>;
export type FormValuesType = Record<string, IFormFieldParams['defaultValue']>;

// export type UseMutationResultType = UseMutationResult<object | boolean, AxiosError, FormValuesType>;

export interface IFormFieldParams {
  type?: string;
  name?: string;
  id?: string;
  label?: string;
  defaultValue?: string;
}
