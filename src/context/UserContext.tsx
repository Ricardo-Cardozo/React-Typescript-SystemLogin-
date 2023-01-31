import React, { useState, useCallback } from "react";

interface UserContextProps {
  isLoggedIn: boolean;
  userId: string | null;
  token: string | null;
  login: (userId: string, token: string) => void;
  logout: () => void;
}

const UserContext = React.createContext<UserContextProps>({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => { },
  logout: () => { },
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((uid: string, tok: string) => {
    setToken(tok);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        userId,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };