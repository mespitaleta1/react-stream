import './App.css';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ContentCategory from './components/ContentCategory';
import { AuthProvider } from './context/authContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<ContentCategory />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
