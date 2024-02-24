function AuthContextProvider() {
}

export default AuthContextProvider;

// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  const loginUser = (token) => {
    setToken(token);
    setIsAuth(true);
  };

  const logoutUser = () => {
    setToken(null);
    setIsAuth(false);
  };

  const authState = { isAuth, token };

  const authContextValue = {
    authState,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
