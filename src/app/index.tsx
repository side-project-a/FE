import { AuthProvider } from '../features';
import { LogIn } from '../wigets';

function App() {
  return (
    <AuthProvider>
      <p>Hello, World!</p>
      <LogIn />
    </AuthProvider>
  );
}

export default App;
