import { FC } from 'react';
import { TextField, useTheme } from '@mui/material';

import {
  HookFormErrorType,
  HookFormFieldType,
  IFormFieldParams,
} from '@components/SignForm/SignForm.types.ts';

interface TextInputProps {
  hookFormField: HookFormFieldType;
  formField: IFormFieldParams;
  errors: HookFormErrorType;
  disabled?: boolean;
}

const TextFieldInput: FC<TextInputProps> = ({ hookFormField, formField, errors, disabled }) => {
  const theme = useTheme();
  const isError = !!errors[formField.name!]?.message;

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
      margin="none"
      variant="outlined"
      fullWidth
      disabled={disabled}
      onChange={(e) => hookFormField.onChange(e)}
      value={hookFormField.value}
      error={isError}
      helperText={<>{errors[formField.name!]?.message}</>}
    />
  );
};

export default TextFieldInput;
