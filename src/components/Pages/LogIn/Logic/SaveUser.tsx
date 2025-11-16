import type {InptsObj } from "../../../../Types/Types";

const SaveUser = (logInInpt:InptsObj) =>{
   const isSavedUser = localStorage.getItem("savedUser");
   const existingObj: InptsObj | null = isSavedUser ? JSON.parse(isSavedUser) :null;
   if(existingObj === null || existingObj?.email !== logInInpt.email ){
     const savedUser  = {
      "email":logInInpt.email,
      "password":logInInpt.password
     }
  localStorage.setItem("savedUser", JSON.stringify(savedUser));
  return savedUser;
  }
  else{
       return null;
  }
}
export default SaveUser;