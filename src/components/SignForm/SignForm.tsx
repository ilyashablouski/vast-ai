import { FC, ReactElement } from 'react';
import { Box, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { Control, Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TextFieldInput from '@components/fields';
import {
  HookFormFieldType,
  HookFormType,
  IFormFieldParams,
  ISignFormSubmit,
} from '@components/SignForm/types.ts';
import { getFormDefaultValuesFromConfig } from '@components/SignForm/helpers.ts';
import { formFields, yupSchema } from '@components/SignForm/settings.ts';

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
  control: Control<ISignFormSubmit>,
  controllerRenderFn: ({ field }: { field: HookFormFieldType }) => ReactElement,
) => <Controller key={formField.id} name={formField.name} control={control} render={controllerRenderFn} />;

const SignForm: FC = () => {
  const defaultValues = getFormDefaultValuesFromConfig(formFields);
  const hookForm = useForm<ISignFormSubmit>({
    resolver: yupResolver(yupSchema),
    mode: 'all',
    defaultValues,
  });
  const { control, handleSubmit } = hookForm;

  const onSubmit: SubmitHandler<ISignFormSubmit> = async (data) => {
    try {
      // Send post request on server
      const response = await axios.post('http://localhost:5180/api/save-user', data, {
        responseType: 'blob',
      });

      // Create an object URL for downloading a file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users.csv'); // Указываем имя файла
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error sending data:', error);
    }
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
