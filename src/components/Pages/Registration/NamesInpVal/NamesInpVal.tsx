import { useState } from "react";
import "../styleForInputs/styleInputs.css";

type Props = {
  onNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
};

const NamesInpVal = ({ onLastNameChange, onNameChange }: Props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const length: number = 3;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const trimmed: string = value.trim();
    setName(value);
    if (trimmed.length >= length) {
      setNameValid(true);
      onNameChange(trimmed);
    } else {
      setNameValid(false);
      onNameChange("");
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const trimmed: string = value.trim();
    setLastName(value);
    if (trimmed.length >= length) {
      setLastNameValid(true);
      onLastNameChange(trimmed);
    } else {
      setLastNameValid(false);
      onLastNameChange("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={handleNameChange}
        className={`input ${name === "" ? "" : nameValid ? "valid" : "invalid"}`}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
        className={`input ${lastName === "" ? "" : lastNameValid ? "valid" : "invalid"}`}
      />
    </>
  );
};

export default NamesInpVal;
