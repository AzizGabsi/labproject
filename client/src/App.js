import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import CreatePost from './components/CreatePost';
import PrivateRouter from './components/PrivateRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<PrivateRouter />}>
              <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="/createPost" element={<CreatePost />} />

            </Routes>
      </header>
    </div>
  );
}

export default App;
