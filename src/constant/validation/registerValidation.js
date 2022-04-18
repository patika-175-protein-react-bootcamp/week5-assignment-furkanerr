/** Dependencies */
import * as yup from 'yup';

const RegisterValidation = yup.object().shape({
    email: yup
        .string()
        .email("Email doğru formatta değil")
        .required( "Eposta alanı zorunludur"),
    password: yup
        .string()
        .min(6, "Şifre en az 6 karakter olmalıdır")
        .required("Şifre alanı zorunludur"),
        passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Şifreler uyuşmuyor')
        .required("Şifre tekrarı alanı zorunludur"),
    name: yup
        .string()
        .required("Ad alanı zorunludur"),
    surname: yup
        .string()
        .required("Soyad alanı zorunludur"),
    userName: yup
        .string()
        .required("Kullanıcı adı alanı zorunludur"),
    checkbox: yup.boolean().oneOf([true], 'Lütfen kabul ediniz.'),
});

export default RegisterValidation;