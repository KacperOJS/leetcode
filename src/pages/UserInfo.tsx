import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { Navigate } from 'react-router-dom';

const UserInfo = () => {
  const { username, loggedIn } = useContext(LoginContext);
  if (!loggedIn) {
	alert('You are not logged in')
    return <Navigate to="/login" />;
  }

  return <div>Welcome {username}</div>;
};

export default UserInfo;
