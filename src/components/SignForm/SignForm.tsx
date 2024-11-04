import { FC, ReactElement } from 'react';
import { Box, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
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

  const hookForm = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues,
  });
  const { control, handleSubmit } = hookForm;

  const onSubmit = (data: object) => {
    console.log('Submitted data:', data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={3} mt={4}>
        {formFields.map((formField) => {
          return renderFieldWithController(formField, control, ({ field }) =>
            getFieldRender(hookForm, field, formField),
          );
        })}
      </Stack>

      <LoadingButton
        id="signFormSubmitBtn"
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        // loading={mutation.isLoading}
        fullWidth
        sx={{ mt: 4 }}
      >
        SIGN UP
      </LoadingButton>
    </Box>
  );
};

export default SignForm;
