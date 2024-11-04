import { FC, ReactElement } from 'react';
import { Stack } from '@mui/material';
import { Control, Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import TextFieldInput from '@components/fields';
import { HookFormFieldType, HookFormType, IFormFieldParams } from '@components/SignForm/types.ts';
import { getFormDefaultValuesFromConfig } from '@components/SignForm/helpers.ts';

const schemaFieldsValidation = {};

const schema = yup.object(schemaFieldsValidation);

const formFields: IFormFieldParams[] = [
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

const getFieldRender = (
  hookForm: HookFormType,
  hookFormField: HookFormFieldType,
  formField: IFormFieldParams,
): ReactElement => {
  const {
    formState: { errors },
  } = hookForm;

  return <TextFieldInput hookFormField={hookFormField} formField={formField} errors={errors} />;
};

const renderFieldWithController = (
  formField: IFormFieldParams,
  control: Control,
  controllerRenderFn: ({ field }: { field: HookFormFieldType }) => ReactElement,
) => <Controller key={formField.id} name={formField.name!} control={control} render={controllerRenderFn} />;

const SignForm: FC = () => {
  const defaultValues = getFormDefaultValuesFromConfig(formFields);
  console.log('defaultValues: ', defaultValues);

  const hookForm = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues,
  });
  const { control, handleSubmit } = hookForm;

  const onSubmit = (data: object) => {
    console.log('Sumbitted data:', data);
  };

  return (
    <Stack component="form" direction="column" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((formField) => {
        return renderFieldWithController(formField, control, ({ field }) =>
          getFieldRender(hookForm, field, formField),
        );
      })}
    </Stack>
  );
};

export default SignForm;
