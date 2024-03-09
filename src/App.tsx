import './App.css';
import LoginForm from './components/LoginForm';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}

export default App;
