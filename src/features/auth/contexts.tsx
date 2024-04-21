import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';
import { useAuth } from './hooks';
import { AuthContextTypes } from './types';

export const authContext = createContext<AuthContextTypes>({
  isAuthenticated: false,
  user: null,
  login: credential => 0,
  logout: () => 0,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, user, login, logout } = useAuth();
  const contextValue = useMemo(
    () => ({ isAuthenticated, user, login, logout }),
    [],
  );
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}
