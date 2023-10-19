import * as yup from 'yup';

export const groupExpenseValidationSchema = yup.object().shape({
  group_id: yup.string().nullable().required(),
  expense_id: yup.string().nullable().required(),
});
