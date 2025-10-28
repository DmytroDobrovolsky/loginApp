import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Email from './components/Pages/Registration/email/Email'
import Password from './components/Pages/Registration/Password/Password'
import SaveToLocal from './components/Pages/Registration/SaveToLocal/SaveToLocal'
import NamesInpVal from './components/Pages/Registration/NamesInpVal/NamesInpVal'
import LogIn from './components/Pages/LogIn/LogIn';
import Home from './components/Pages/Home/Home';
import "./components/Pages/LogIn/InputsVal.css"
import EditIcon from '@mui/icons-material/Edit';

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = createTheme();

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
                <div className='inputCont'>
                  <NamesInpVal onNameChange={setName} onLastNameChange={setLastName} />
                  <Email onChange={setEmail} />
                  <Password onChange={setPassword} />
                </div>
                <SaveToLocal name={name} lastName={lastName} email={email} password={password} />
              </>
            } />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}
export default App
