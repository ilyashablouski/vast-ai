import { assign, reduce } from 'lodash';

import { FormValuesType, IFormFieldParams } from '@components/SignForm/types.ts';

export const getFormDefaultValuesFromConfig = (formConfig: IFormFieldParams[]): FormValuesType => {
  return reduce(
    formConfig,
    (defaultFieldWithValue, currentField) => {
      return assign(defaultFieldWithValue, { [currentField.name!]: currentField.defaultValue });
    },
    {},
  );
};
