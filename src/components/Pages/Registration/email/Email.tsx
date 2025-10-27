import { useState } from "react";
import "../styleForInputs/styleInputs.css";

type Props = {
  onChange: (value: string) => void;
};

const Email = ({ onChange }: Props) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    const trimmed: string = inputValue.trim();
    setEmail(inputValue);

    const isValidTrimmed = (trimmed: string) =>
      /^[^@]+@[^@]+\.[^@]+$/.test(trimmed);
    if (isValidTrimmed(trimmed)) {
      setIsValid(true);
      onChange(trimmed);
    } else {
      setIsValid(false);
      onChange("");
    }
  };

  return (<>
    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className={`input ${email === "" ? "" : isValid ? "valid" : "invalid"}`} />
  </>);
}

export default Email;