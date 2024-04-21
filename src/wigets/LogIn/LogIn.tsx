import { useContext } from 'react';
import { authContext } from '../../features';

export default function LogIn() {
  const { isAuthenticated, login, logout } = useContext(authContext);
  return isAuthenticated ? (
    <button onClick={logout}>logout</button>
  ) : (
    <button onClick={login}>login</button>
  );
}
