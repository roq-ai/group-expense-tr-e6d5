import * as yup from 'yup';

export const groupMemberValidationSchema = yup.object().shape({
  joined_at: yup.date().required(),
  role: yup.string().required(),
  user_id: yup.string().nullable().required(),
  group_id: yup.string().nullable().required(),
});
