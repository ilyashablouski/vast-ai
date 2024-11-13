import { ChangeEvent, FC } from 'react';
import { FormControl, InputLabel, TextField, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

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
    <FormControl fullWidth margin="normal">
      <InputLabel
        htmlFor={formField.id}
        shrink
        sx={{
          top: '-12px',
          left: '-2px',
          color: theme.palette.text.primary,
          lineHeight: '1.17',
          fontSize: { xs: '1rem', sm: '0.875rem' },
        }}
      >
        {formField.label}
      </InputLabel>

      {isPhoneField && (
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{
            position: 'absolute',
            right: 0,
            top: '-22px',
            lineHeight: '1.17',
            fontSize: { xs: '0.875rem', sm: '0.75rem' },
          }}
        >
          Optional
        </Typography>
      )}

      <TextField
        {...hookFormField}
        sx={{
          '& .MuiInputBase-root.Mui-focused .MuiButtonBase-root': { color: theme.palette.primary.main },
          '& .MuiInputBase-root.Mui-error .MuiButtonBase-root': { color: theme.palette.error.main },
        }}
        type={formField.type}
        id={formField.id}
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
            sx: {
              mr: '12px',
              minHeight: { xs: '1.06rem', sm: '0.875rem' },
              fontSize: { xs: '0.875rem', sm: '0.75rem' },
              visibility: isError ? 'visible' : 'hidden',
            },
          },
        }}
      />
    </FormControl>
  );
};

export default TextFieldInput;
