import { FC, ReactElement, useState } from 'react';
import { Alert, Box, Portal, Snackbar, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Control, Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';

import TextFieldInput from '@components/fields';
import {
  HookFormFieldType,
  HookFormType,
  IFormFieldParams,
  ISignFormSubmit,
} from '@components/SignForm/types.ts';
import { getFormDefaultValuesFromConfig } from '@components/SignForm/helpers.ts';
import { formFields, yupSchema } from '@components/SignForm/settings.ts';
import { Error as ErrorIcon } from '@components/icons';
import useGlobalContext from '@/store/context.tsx';

interface ISignFormProps {
  toggleSuccessModal: (payload: boolean) => void;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getFieldRender = (
  hookForm: HookFormType,
  hookFormField: HookFormFieldType,
  formField: IFormFieldParams,
  isLoading: boolean,
): ReactElement => {
  const {
    formState: { errors },
  } = hookForm;

  return (
    <TextFieldInput
      hookFormField={hookFormField}
      formField={formField}
      errors={errors}
      disabled={isLoading}
    />
  );
};

const renderFieldWithController = (
  formField: IFormFieldParams,
  control: Control<ISignFormSubmit>,
  controllerRenderFn: ({ field }: { field: HookFormFieldType }) => ReactElement,
) => <Controller key={formField.id} name={formField.name} control={control} render={controllerRenderFn} />;

const SignForm: FC<ISignFormProps> = ({ toggleSuccessModal }) => {
  const { toggleModal } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultValues = getFormDefaultValuesFromConfig(formFields);
  const hookForm = useForm<ISignFormSubmit>({
    resolver: yupResolver(yupSchema),
    mode: 'all',
    defaultValues,
  });
  const { control, handleSubmit } = hookForm;

  const onSubmit: SubmitHandler<ISignFormSubmit> = async (data) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/save-user`, data);

      if (response.status === 200) {
        toggleModal(false);
        toggleSuccessModal(true);
      }
    } catch (error: unknown) {
      setIsError(true);

      if (error instanceof AxiosError) {
        if (error.response) {
          setErrorMessage(`Error: ${error.response.status} - ${error.response.data.message}`);
        } else {
          setErrorMessage(`An error has occurred: ${error.message}`);
        }
      } else {
        setErrorMessage('An unknown error has occurred');
      }

      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} mt={4}>
          {formFields.map((formField) => {
            return renderFieldWithController(formField, control, ({ field }) =>
              getFieldRender(hookForm, field, formField, isLoading),
            );
          })}
        </Stack>

        <LoadingButton
          id="signFormSubmitBtn"
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ mt: 4 }}
          loading={isLoading}
        >
          SIGN UP
        </LoadingButton>
      </Box>

      {isError && (
        <Portal>
          <Snackbar
            open={openSnackbar}
            onClose={handleCloseSnackbar}
            autoHideDuration={5000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <Alert
              icon={<ErrorIcon fontSize="inherit" />}
              onClose={handleCloseSnackbar}
              severity="error"
              variant="filled"
            >
              {errorMessage || 'An error occurred while sending data'}
            </Alert>
          </Snackbar>
        </Portal>
      )}
    </>
  );
};

export default SignForm;
