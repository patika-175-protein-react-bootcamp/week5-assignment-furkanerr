/** Dependencies */
import React from "react";
import clsx from "clsx";

/**Context */
import { useTheme } from "../context/themeContext";
/** Components */
import RegisterLeft from '../components/RegisterLeft/RegisterLeft';
import RegisterRight from '../components/RegisterRight/RegisterRight';


/** Styles */
import "./style.css";
function Register() {
  const { theme } = useTheme();
  return (
    <div className="RegisterPageContainer">
      <div className="RegisterLeft" >
        <RegisterLeft />
      </div>
      <div className={clsx("RegisterRight",{'RegisterRight-dark':theme==='dark'})}>
        <RegisterRight />
      </div>
    </div>
  );
}

export default Register;
