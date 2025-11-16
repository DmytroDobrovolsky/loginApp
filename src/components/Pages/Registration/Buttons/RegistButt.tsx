import NearMeIcon from '@mui/icons-material/NearMe';
import type { ButtonProps } from "../../../../Types/Types.ts"
import "./RegistButt.css"

const RegistButt = ({ onClick }: ButtonProps) => {
    return (
        <div className='regButCont'>
            <button className='regBtn' onClick={onClick} ><NearMeIcon /></button>
        </div>
    )
}

export default RegistButt;

