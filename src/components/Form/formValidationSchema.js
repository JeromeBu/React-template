import Yup from "yup"

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Cette adresse email n'est pas valide")
    .required("L'email est requis"),
  firstName: Yup.string().required("Le prénom est requis"),
  lastName: Yup.string().required("Le nom est requis"),
  street_address: Yup.string()
    .min(3, "L'addresse est trop courte")
    .required("Address is required"),
  code: Yup.string().required("Code is required")
})
