import "../Inputs/LogIn.css"
import type { ButtonProps } from "../../../../Types/Types"

const LogButt = ({ onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="btnLogIn">LogIn</button>
    )
}
export default LogButt;