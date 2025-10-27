import { useEffect, useState } from "react";
import InputsVal from "./InputsVal";
import "./LogIn.css"
import KeyIcon from '@mui/icons-material/Key';

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passValid, setPassValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => {
    const key: string | null = localStorage.getItem("rememberKey");
    if (key) {
      const remUser: string | null = localStorage.getItem(key);
      if (remUser) {
        try {
          type StoredUser = { email: string; password: string };
          const parsedUser: StoredUser = JSON.parse(remUser);
          setEmail(parsedUser.email);
          setPassword(parsedUser.password);
        } catch (err) {
          console.error("Відсутній збережений користувач:", err);
        }
      }
    }
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
          className={`inputs ${email !== "" && !emailValid ? "invalid" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={`inputs ${password !== "" && !passValid ? "invalid" : ""}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {((!emailValid && email !== "") || (!passValid && password !== "")) && (<p className="error"> Wrong password, or email</p>)}
      <InputsVal email={email} password={password} setPassValid={setPassValid} setEmailValid={setEmailValid} />
    </div>
  );
};

export default LogIn;