import type { User } from "../../../../Types/Types";

const ToLocalSave = (validUser: User | null, setDublicate: (v: boolean) => void, navigate: (path: string) => void) => {
    if (!validUser) return;
    try {
        const isUserObj = localStorage.getItem("userObj");
        const existingObj = isUserObj ? JSON.parse(isUserObj) : {};
        const key = validUser.email;
        if (existingObj[key]) {
            setDublicate(true);
            return false;
        }
        if (!existingObj[key]) {
            const updatedObj = {
                ...existingObj,
                [key]: validUser,
            };
            setDublicate(false);
            localStorage.setItem("userObj", JSON.stringify(updatedObj));
            navigate("/LogIn");
            return true;
        };
    } catch (err) {
        console.error("Помилка при збереженні користувача:", err);
    }
}
export default ToLocalSave;