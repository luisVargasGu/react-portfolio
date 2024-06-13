import * as React from "react";
import { login, register } from "../services/auth";
import { getCookie } from "../services/http";

const authContext = React.createContext();

function useAuth() {
    const [authed, setAuthed] = React.useState(false);

    const checkAuthStatus = () => {
        const jwtToken = getCookie("jwt_token");
        if (jwtToken) {
            setAuthed(true);
        } else {
            setAuthed(false);
        }
    };

    React.useEffect(() => {
        checkAuthStatus();
    }, []);

    const handleLogin = async (email, password) => {
        try {
            const data = await login(email, password);
            if (data) {
                setAuthed(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = async (email, password) => {
        try {
            const data = await register(email, password);
            if (data) {
                setAuthed(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        document.cookie = "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setAuthed(false);
    };

    return {
        authed,
        handleLogin,
        register: handleRegister,
        logout: handleLogout,
    };
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}

