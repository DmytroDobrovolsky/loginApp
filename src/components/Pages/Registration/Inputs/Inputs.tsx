import "./Inputs.css"
import type { InputsProps } from "../../../../Types/Types.ts"

const Inputs = ({ user, onChange, dublicate, validInpt }: InputsProps) => {
    return (
        <div className="inputCont">
            <input
                placeholder="First name"
                type="text"
                value={user.firstName}
                onChange={onChange("firstName")}
                className={`input ${user.firstName === "" ? "" : validInpt.firstName ? "valid" : "invalid"}`}
            />
            <p className="p"> Your First name must have min 3 symbol</p>
            <input
                placeholder="Last name"
                type="text"
                value={user.lastName}
                onChange={onChange("lastName")}
                className={`input ${user.lastName === "" ? "" : validInpt.lastName ? "valid" : "invalid"}`}
            />
            <p className="p"> Your Last name must have min 3 symbol</p>
            <input
                placeholder="Email"
                type="email"
                value={user.email}
                onChange={onChange("email")}
                className={`input ${user.email === "" ? "" : validInpt.email ? "valid" : "invalid"}`}
            />
            <p className="p"> Your email must look like min: "h@h.h"</p>
            <input
                placeholder="Password"
                type="password"
                value={user.password}
                onChange={onChange("password")}
                className={`input ${user.password === "" ? "" : validInpt.password ? "valid" : "invalid"}`}
            />
            <p className="p"> Your password must have min 8 letter, 1 letter must be in uppercase</p>
            {dublicate && (
                <p className="error">
                    This email is used!
                </p>
            )}
        </div>

    );
};

export default Inputs;
