import type { InptsObj } from "../../../../Types/Types";

const AddSavedUser = () => {
  const isSavedUser = localStorage.getItem("savedUser");
  const existingObj: InptsObj | null = isSavedUser ? JSON.parse(isSavedUser) : null;
  if (existingObj) {
    return existingObj;
  }
  else {
    return null;
  }
}
export default AddSavedUser;