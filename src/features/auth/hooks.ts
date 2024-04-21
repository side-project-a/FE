import { useCallback, useState } from 'react';
import { useLocalStorage } from '../../shared';
import { UserProfile } from '../../entities';
import type { Credential } from './types';

export function useAuth() {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    'accessToken',
    null,
  );
  const [user, setUser] = useState<UserProfile | null>(null);

  const isAuthenticated = !!accessToken;

  const login = useCallback((credential: Credential) => {
    // authenticate

    setAccessToken('temporary_accesstoken');
    setUser('temporary_userprofile');

    // redirect
  }, []);

  const logout = useCallback(() => {
    setAccessToken(null);
  }, []);

  return { isAuthenticated, user, login, logout };
}
