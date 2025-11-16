import type { InptsObj, ValidLogObj } from "../../../../Types/Types";

const LogInValid = (logInInpt: InptsObj) => {
    const validObj: ValidLogObj = {
        email: true,
        password: true
    }
    const trimEmail = logInInpt.email.trim();
    const trimPass = logInInpt.password.trim();
    const getUserObj = localStorage.getItem("userObj");
    if (getUserObj) {
        const parsedUserObj = JSON.parse(getUserObj);
        const parsedUser = parsedUserObj[trimEmail];
        if (parsedUser) {
            const validPass = parsedUser.password === trimPass;
            validObj.email = true;
            validObj.password = validPass;
        }
        if (!parsedUser) {
            validObj.email = false;
            validObj.password = false;
        }
    }
    return validObj;
}
export default LogInValid;