export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type validInpts = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
};

export type InptsObj = {
  email: string,
  password: string
};

export type ValidLogInp = {
  email: boolean,
  password: boolean
};

export type ButtonProps = {
  onClick: () => void;
}

export type InputsProps = {
  user: User;
  onChange: (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  validInpt: validInpts;
  dublicate: boolean;
};

export type Props = {
  onChange: (field: keyof InptsObj) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  logBtnClick: () => void;
  saveBtnClick: () => void;
  logInInpt: InptsObj;
  validLogInp: ValidLogInp;
  savedUserDublic: boolean;
}

export type ValidLogObj = {
  email: boolean,
  password: boolean
};
