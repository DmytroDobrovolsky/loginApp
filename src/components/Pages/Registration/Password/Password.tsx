import { useState } from "react";
import "../styleForInputs/styleInputs.css";

type Props = {
    onChange: (value: string) => void;
};
const Password = ({ onChange }: Props) => {
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = event.target.value;
        const trimmed: string = inputValue.trim();
        const length: number = 8;
        const hasUpper: boolean = /[A-Z]/.test(trimmed);
        const hasLower: boolean = /[a-z]/.test(trimmed);
        setPassword(inputValue);
        if (trimmed.length >= length && hasLower === true && hasUpper === true) {
            onChange(trimmed);
            setIsValid(true);
        } else {
            onChange("");
            setIsValid(false);
        }
    };

    return (<>
        <input type="password" placeholder="Password" value={password} onChange={handlePassChange} className={`input ${password === "" ? "" : isValid ? "valid" : "invalid"}`} />
    </>);
}

export default Password;