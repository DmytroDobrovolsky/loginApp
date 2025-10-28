import { useNavigate } from "react-router-dom";
import "./SaveToLocal.css"
import NearMeIcon from '@mui/icons-material/NearMe';

type localProps = {
  name?: string,
  lastName?: string,
  email?: string,
  password?: string
}

const SaveToLocal = ({ name, lastName, email, password }: localProps) => {
  type User = {
    name: string;
    lastName: string;
    email: string;
    password: string;
  };
  const navigate = useNavigate();

  const RegButtOnClick = () => {
    if (name && lastName && email && password) {
      const newUser: User = { name, lastName, email, password }
      let key: string = email;
      localStorage.setItem(key, JSON.stringify(newUser));
      navigate("/LogIn");
    }
  }
  return (
    <button className="btnSave" onClick={RegButtOnClick} disabled={!name || !lastName || !email || !password} ><NearMeIcon /></button>
  );
}

export default SaveToLocal;