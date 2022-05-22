import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .email("Formato de e-mail inválido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve conter 6 digitos")
    .required("A senha é obrigatória"),
});
