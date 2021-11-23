import { object, string } from 'yup';

export default object()
  .shape({
    Theme: string().required('* Campo obrigatório'),
    Language: string().required('* Campo obrigatório'),
  })
  .required();
