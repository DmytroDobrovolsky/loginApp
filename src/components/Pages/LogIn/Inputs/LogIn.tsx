import "./LogIn.css"
import KeyIcon from '@mui/icons-material/Key';
import LogButt from "../Buttons/LogButt";
import SaveBtn from "../Buttons/SaveBtn";
import type { Props } from "../../../../Types/Types"
import AddSavedUser from "../Logic/AddSavedUser";
import { useEffect } from "react";

const LogIn = ({ onChange, logInInpt, validLogInp, logBtnClick, savedUserDublic, saveBtnClick, setLogInInpts }: Props) => {
  
 
  const addSavedUs = () => {
    const user = AddSavedUser();
    if (user) {
      setLogInInpts({ email: user.email, password: user.password });
    }
  }
  
  useEffect(() => {
    addSavedUs();
  }, []);

  return (
    <div className="logIn">
      <div className="contForH1Icon">
        <h1 className="h1LogIn">Log In</h1>
        <KeyIcon className="keyIcon" />
      </div>
      <div className="inputsCont">
        <input
          type="email"
          placeholder="Email"
          className={`input ${logInInpt.email === "" ? "" : validLogInp.email ? "valid" : "invalid"}`}
          value={logInInpt.email}
          onChange={onChange("email")}
        />
        <p > Write your email</p>
        <input
          type="password"
          placeholder="Password"
          className={`input ${logInInpt.password === "" ? "" : validLogInp.password ? "valid" : "invalid"}`}
          value={logInInpt.password}
          onChange={onChange("password")}
        />
        <p> Write your password</p>
      </div >
      <div className="groupCont">
        <div className="errorCont">
          {((!validLogInp.email && logInInpt.email !== "") || (!validLogInp.password && logInInpt.password !== "")) && (<p className="errorP"> Wrong password, or email</p>)}
          {(!savedUserDublic) && (<p className="errorP"> This user saved</p>)}
        </div>
        <div className="btnContLogIn">
          <LogButt onClick={logBtnClick}></LogButt>
          <SaveBtn onClick={saveBtnClick}></SaveBtn>
        </div>
      </div>
    </div>
  );
};
export default LogIn;


