import * as Yup from "yup";

const nameRegExp = /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([',. -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/;
const phoneRegExp = /^\+380\d{9}$/;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .max(55, "Max length 55 symbols!")
        .min(5, "Min length 5 symbols")
        .required("Email is required"),
    name: Yup.string()
        .matches(nameRegExp, "Name is not valid")
        .min(2, "Min length 2 symbols")
        .max(50, "Max length 50 symbols!")
        .required("Name is required"),
    phone: Yup.number()
        .matches(phoneRegExp, "Phone number is not valid. It should be in the format +380XXXXXXXXX")
        .min(8, "Min length 8 symbols")
        .required("Phone number is required")

});

export default validationSchema;