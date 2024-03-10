import './App.css';
import LoginForm from './routes/LoginForm';
import Home from './routes/Home';
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
          <Route path="/category/[:category]" element={<ContentCategory />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
