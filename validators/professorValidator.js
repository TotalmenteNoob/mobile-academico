import * as Yup from 'yup';

const professorValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O nome deve conter ao menos 3 caracteres')
    .required('Campo nome é obrigatório'),
  cpf: Yup.string()
    .required('Campo CPF é obrigatório'),
  matricula: Yup.string()
    .required('Campo matrícula é obrigatório'),
  salario: Yup.number()
    .typeError('Salário deve ser um número')
    .min(0, 'Salário não pode ser negativo'),
  email: Yup.string()
    .min(3, 'O email deve conter ao menos 3 caracteres')
    .email('Deve ser um email válido')
    .required('Campo email é obrigatório'),
  telefone: Yup.string()
    .required('Campo telefone é obrigatório'),
  cep: Yup.string()
    .required('Campo CEP é obrigatório'),
  logradouro: Yup.string()
    .required('Campo logradouro é obrigatório'),
  complemento: Yup.string(),
  numero: Yup.string()
    .required('Campo número é obrigatório'),
  bairro: Yup.string()
    .required('Campo bairro é obrigatório'),
});

export default professorValidator;
