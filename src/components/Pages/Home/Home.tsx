import { useNavigate } from "react-router-dom";
import "./Home.css"
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LogoutIcon from '@mui/icons-material/Logout';

const Home = () => {
  const navigate = useNavigate();

  const leaveButtClick = () => {
    navigate("/LogIn");
  }
  return (
    <div className="Home">
      <button className="button">
        <SettingsIcon />
        Settings</button>
      <button className="button">
        <PeopleIcon />
        My friends</button>
      <button className="button">
        <ShoppingCartIcon />
        Shop</button>
      <button className="button">
        <CheckroomIcon />
        My clothes</button>
      <button className="button" onClick={leaveButtClick}>
        <LogoutIcon />
        Log out</button>
    </div>
  )
}

export default Home;