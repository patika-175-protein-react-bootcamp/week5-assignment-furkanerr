/** Dependencies */
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import clsx from "clsx";

/**Context */
import {useTheme} from '../../context/themeContext';

/** Icons */
import DarkModeIcon from "../../constant/Icons/darkModeIcon";
import LightModeIcon from "../../constant/Icons/lightModeIcon";
import LineUnderTheKayitOl from "../../constant/Icons/lineUnderTheKayitOl";

/** Validation */
import RegisterValidation from "../../constant/validation/registerValidation";

/** Style */
import "./style.css";

function RegisterRight() {
 
  const { handleModeChange ,theme} = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      userName: "",
      checkbox: false,
    },
    validationSchema: RegisterValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

console.log(formik.errors)

  return (
    <div className={clsx("RegisterRightContainer",{'RegisterRightContainer-dark':theme==='dark'})}>
      <div className="RegisterTextAndToggleContainer">
        <div className="RegisterTextContainer">
          <div className={clsx("RegisterText",{'RegisterText-dark':theme==='dark'})}>Kayıt</div>
          <div className="LineUnderTheKayitOl">
            <LineUnderTheKayitOl color={
              theme === "light" ? "#444AFF" : "#FFBF5E"
            } />
          </div>
        </div>
        <div className="ToggleContainer">
          <div className="Toggle" onClick={handleModeChange}>
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
        </div>
      </div>
      <div className="RegisterFormContainer">
        <form onSubmit={formik.handleSubmit}>
          <div className="NameAndSurname">
            <div className="Name">
              <label className={clsx("label",{'label-dark':theme==='dark'})} htmlFor="name">İSİM</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                placeholder="İsmini gir"
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="Error">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="Surname">
              <label className={clsx("label",{'label-dark':theme==='dark'})} htmlFor="surname">SOYİSİM</label>
              <input
                type="text"
                name="surname"
                onChange={formik.handleChange}
                placeholder="Soyismini gir"
                value={formik.values.surname}
              />
              {formik.errors.surname && formik.touched.surname ? (
                <div className="Error">{formik.errors.surname}</div>
              ) : null}
            </div>
          </div>
          <div className="form-middle">
            <div className="Eposta">
              <label className={clsx("label",{'label-dark':theme==='dark'})} htmlFor="email">E-POSTA</label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                placeholder="E-posta adresini gir"
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="Error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="KullaniciAdi">
              <label className={clsx("label",{'label-dark':theme==='dark'})}htmlFor="userName">KULLANICI ADI</label>
              <input
                type="text"
                name="userName"
                onChange={formik.handleChange}
                placeholder="Kullanıcı adını gir"
                value={formik.values.userName}
              />
              {formik.errors.userName && formik.touched.userName ? (
                <div className="Error">{formik.errors.userName}</div>
              ) : null}
            </div>
            <div className="Password">
              <label className={clsx("label",{'label-dark':theme==='dark'})}htmlFor="password">ŞİFRE</label>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                placeholder="Şifreni gir"
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="Error">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="PasswordConfirm">
              <label className={clsx("label",{'label-dark':theme==='dark'})}htmlFor="passwordConfirm">ŞİFRENİ TEKRAR GİR</label>
              <input
                type="password"
                name="passwordConfirm"
                onChange={formik.handleChange}
                placeholder="Şifreni doğrula"
                value={formik.values.passwordConfirm}
              />
              {formik.errors.passwordConfirm &&
              formik.touched.passwordConfirm ? (
                <div className="Error">{formik.errors.passwordConfirm}</div>
              ) : null}
            </div>
          </div>
          <div className="rememberMe">
          
            <input type="checkbox" name={'checkbox'} value={formik.values.checkbox} onChange={formik.handleChange} className={clsx('',{'input-dark':theme==='dark'})} />
            <span>Sözleşmeyi kabul ediyorum</span>
            {formik.errors.checkbox &&
              formik.touched.checkbox ? (
                
                <div className="CheckboxError">{formik.errors.checkbox}</div>
              ) : null}
          </div>
          <div className="RegisterButton">
            <button className={clsx('',{'button-dark':theme==='dark'})} type="submit">Kayıt Ol</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterRight;
