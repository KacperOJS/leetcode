import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { Navigate } from 'react-router-dom';

const UserInfo = () => {
  const { username, loggedIn } = useContext(LoginContext);

  // Redirect to the login page if user is not logged in
  if (!loggedIn) {
	alert('You are not logged in')
    return <Navigate to="/login" />;
  }

  return <div>Welcome {username}</div>;
};

export default UserInfo;
