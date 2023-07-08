// App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header2 from './pages/Header2';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import UserInfo from './pages/UserInfo';
import { LoginContext } from './context/LoginContext';
import Logout from './pages/Logout';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{ username, setUsername, password, setPassword, loggedIn, setLoggedIn }}
    >
      <Router>
        <Header2 />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/logout" element={<Logout />} />
          {/* Add more routes as needed */}
          <Route
            path="/userinfo"
            element={<UserInfo />}
          />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
