import { UserProfile } from '../../entities';

export type Credential = unknown;
export type AuthContextTypes = {
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (credential: Credential) => void;
  logout: () => void;
};
