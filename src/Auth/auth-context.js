import React, {useState} from "react";

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    login:(token)=> {},
    logout: ()=>{}
});

export const AuthContextProvider = (props) => {

    const savedToken = localStorage.getItem('token');
    const [token, setToken] = useState(savedToken);

    const isUserLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    }

    const logoutHandler = () => {
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: isUserLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
}

export default AuthContext;