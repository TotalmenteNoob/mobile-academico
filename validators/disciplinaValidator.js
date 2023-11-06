import * as Yup from 'yup';

const disciplinaValidator = Yup.object().shape({
    nome: Yup.string()
        .required('Campo nome é obrigatório'),
    curso: Yup.string()
        .required('Campo curso é obrigatório'),
})

export default disciplinaValidator