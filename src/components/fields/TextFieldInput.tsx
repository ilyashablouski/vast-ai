import { ChangeEvent, FC } from 'react';
import { TextField, useTheme } from '@mui/material';

import { HookFormErrorType, HookFormFieldType, IFormFieldParams } from '@components/SignForm/types.ts';

interface TextInputProps {
  hookFormField: HookFormFieldType;
  formField: IFormFieldParams;
  errors: HookFormErrorType;
  disabled?: boolean;
}

const TextFieldInput: FC<TextInputProps> = ({ hookFormField, formField, errors, disabled }) => {
  const theme = useTheme();
  const errorMessage = errors[formField.name!]?.message;
  const isError = !!errors[formField.name!];
  const isPhoneField = formField.type === 'tel';

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^(\+)?\d{0,15}$/.test(value)) {
      hookFormField.onChange(e);
    }
  };

  return (
    <TextField
      {...hookFormField}
      sx={{
        '& .MuiInputBase-root.Mui-focused .MuiButtonBase-root': { color: theme.palette.primary.main },
        '& .MuiInputBase-root.Mui-error .MuiButtonBase-root': { color: theme.palette.error.main },
      }}
      type={formField.type}
      id={formField.id}
      label={formField.label}
      placeholder={formField.placeholder}
      margin="none"
      variant="outlined"
      fullWidth
      disabled={disabled}
      onChange={isPhoneField ? handlePhoneNumberChange : (e) => hookFormField.onChange(e)}
      value={hookFormField.value}
      error={isError}
      helperText={<>{isError ? errorMessage : ' '}</>}
      slotProps={{
        formHelperText: {
          sx: { minHeight: '20px', visibility: isError ? 'visible' : 'hidden' },
        },
      }}
    />
  );
};

export default TextFieldInput;
