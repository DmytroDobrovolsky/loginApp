import type { User, validInpts } from "../../../../Types/Types.ts"

const InputsVal = (user: User, setValidInpt: (v: validInpts) => void) => {
  const minNamesLength: number = 3;
  const minPassLength: number = 8;

  const trimUserFields = (user: User): User => {
    const trimmedEntries = Object.entries(user).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.trim()];
      }
      return [key, value];
    });
    return Object.fromEntries(trimmedEntries) as User;
  };

  const validUser = (user: User): User | null => {
    const trimmed = trimUserFields(user);
    const validFirstName = trimmed.firstName;
    const validLastName = trimmed.lastName;
    const validPass = trimmed.password;
    const validEmail = trimmed.email;
    const isFirstNameValid = validFirstName.length >= minNamesLength;
    const isLastNameValid = validLastName.length >= minNamesLength;
    const isEmailValid = /^[^@]+@[^@]+\.[^@]+$/.test(validEmail);
    const isPassValid = /[A-Z]/.test(validPass) && /[a-z]/.test(validPass) && validPass.length >= minPassLength;
    setValidInpt({
      firstName: isFirstNameValid,
      lastName: isLastNameValid,
      email: isEmailValid,
      password: isPassValid,
    });
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPassValid) {
      const newUser: User = { firstName: validFirstName, lastName: validLastName, password: validPass, email: validEmail };
      return newUser;
    }
    else {
      return null;
    }
  }
  const result = validUser(user);
  return result;
}

export default InputsVal;