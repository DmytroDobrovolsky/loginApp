import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InputsVal.css"

type User = {
  email: string;
  password: string;
  setPassValid: (value: boolean) => void;
  setEmailValid: (value: boolean) => void;
};

const InputsVal = ({ email, password, setPassValid, setEmailValid }: User) => {
  const [valid, setValid] = useState(false);
  const [remMe, setRemMe] = useState(false);

  const navigate = useNavigate();
  const trimEmail: string = email.trim();
  const trimPass: string = password.trim();

  useEffect(() => {
    const emailValue: string | null = localStorage.getItem(trimEmail);
    if (emailValue) {
      try {
        const parsedUser: { email: string; password: string } = JSON.parse(emailValue);
        const validPass: boolean = trimPass === parsedUser.password;
        setEmailValid(true);
        setValid(validPass);
        setPassValid(validPass);
      } catch (err) {
        console.error("Відсутній користувач:", err);
      }
    } else {
      setEmailValid(false);
      setValid(false);
      setPassValid(false);
    }
  }, [trimEmail, trimPass]);

  const rememberBtnClick = () => {
    if (valid && email && password) {
      setRemMe(true);
      const rememberUser: object = { email, password };
      localStorage.setItem("Saved" + email, JSON.stringify(rememberUser));
      localStorage.setItem("rememberKey", "Saved" + email);
    }
  };

  const loginButtonClick = () => {
    if (valid) {
      navigate("/Home");
    }
  };

  return (
    <div className="btnContLogIn">
      <button className={`btnLogIn ${remMe ? "valid" : ""}`}
        onClick={rememberBtnClick} disabled={!valid || !email || !password}>Save info</button>
      <button className="btnLogIn" onClick={loginButtonClick} disabled={!valid}>Log In</button>
    </div>
  );
};

export default InputsVal;
