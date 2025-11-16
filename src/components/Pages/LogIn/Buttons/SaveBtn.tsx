import type { ButtonProps } from "../../../../Types/Types"

const SaveBtn = ({ onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="btnLogIn">Save info</button>
    )
}
export default SaveBtn;