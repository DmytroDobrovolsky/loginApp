import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LogIn from './components/Pages/LogIn/Inputs/LogIn';
import Home from './components/Pages/Home/Home';
import EditIcon from '@mui/icons-material/Edit';
import Inputs from './components/Pages/Registration/Inputs/Inputs';
import InputsVal from './components/Pages/Registration/Logic/InputsVal';
import ToLocalSave from './components/Pages/Registration/Logic/SaveToLocal';
import RegistButt from './components/Pages/Registration/Buttons/RegistButt';
import LogInValid from './components/Pages/LogIn/Logic/LogInValid';
import SaveUser from './components/Pages/LogIn/Logic/SaveUser';
import type { User, validInpts, InptsObj, ValidLogInp } from "./Types/Types.ts";

const App = () => {
  const [user, setUser] = useState<User>({ firstName: "", lastName: "", email: "", password: "" });
  const [validInpt, setValidInpt] = useState<validInpts>({ firstName: true, lastName: true, email: true, password: true });
  const [dublicate, setDublicate] = useState(false);
  const [logInInpt, setLogInInpts] = useState<InptsObj>({ email: "", password: "" });
  const [validLogInp, setValidLogInp] = useState<ValidLogInp>({ email: true, password: true });
  const [savedUserDublic, setSavedUserDublic] = useState(true);
  const theme = createTheme();
  const navigate = useNavigate();

  const saveUserToLocalStorage = () => {
    const validUser = InputsVal(user, setValidInpt);
    if (validUser) {
      const clearInput = ToLocalSave(validUser, setDublicate, navigate);
      if (clearInput === true) {
        setUser({ firstName: "", lastName: "", email: "", password: "" });
        setValidInpt({ firstName: true, lastName: true, email: true, password: true });
        setDublicate(false);
      }
    }
  };

  const saveUserInfo = () => {
    const savedUser = SaveUser(logInInpt);
    if (savedUser === null) {
      setSavedUserDublic(false);
    }
    else {
      setSavedUserDublic(true);
    }
  }

  const validLogInInpts = () => {
    const validInputs = LogInValid(logInInpt);
    setValidLogInp(validInputs);
    if (validInputs.email === true && validInputs.password === true) {
      navigate("/Home");
      setLogInInpts({ email: "", password: "" });
      setValidLogInp({ email: true, password: true });
      setSavedUserDublic(true);
    }
  };

  const handleChangeRegInp = (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleChangeLogInp = (field: keyof InptsObj) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogInInpts(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='contForH1Icon'>
                  <h1 className='h1'>Registration</h1>
                  <EditIcon className='iconReg' />
                </div>
                <Inputs user={user} onChange={handleChangeRegInp} validInpt={validInpt} dublicate={dublicate} />
                <RegistButt onClick={saveUserToLocalStorage} ></RegistButt>
              </>
            } />
          <Route path="/LogIn" element={<LogIn onChange={handleChangeLogInp} logInInpt={logInInpt} validLogInp={validLogInp} savedUserDublic={savedUserDublic} logBtnClick={validLogInInpts} saveBtnClick={saveUserInfo} />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}
export default App
