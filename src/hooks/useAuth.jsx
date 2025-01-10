import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
    // const a = useState();
    // return a;
};

export default useAuth;