import { useContext, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateAccount = () => {
  const { username, password, setUsername, setPassword } = useContext(LoginContext);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleRegister =  (e:any) => {
    e.preventDefault();
	const userData = {
		username,
		password,
		email,
	};
	if(username==='' || password==='' || email==='' ||repeatPassword ==='') return;
	if(password === repeatPassword){
		axios.post('http://localhost:3001/api/data', userData)
		.then((response) => {
			console.log(response.status);
		if(response.request.status===409){
				alert('User Is already exist')
				setUsername('');
				setRepeatPassword('');
				setPassword('');
				setEmail('');
		}
		  if (response.data.success) {
			alert('User created')
			navigate('/login')
			setUsername('');
			setRepeatPassword('');
			setPassword('');
			setEmail('');
		  } else {
			console.log('Error:', response.data.message);
			setUsername('');
			setRepeatPassword('');
			setPassword('');
			setEmail('');
		  }
		})
		.catch((error) => {
		  console.log('Error:', error);
		});
	}else{
		alert('hasla nie sa takie same');
	}
    // Check if the user profile exists
	
};

    //   if (response.ok) {
    //     // User profile created successfully
    //     console.log('User created');
    //   } else {
        // Error occurred, handle the appropriate error or display a message


  return (
    <div className="grid justify-center align-middle">
      <div>
        <form onSubmit={handleRegister}>
          <span className="flex justify-center">Create Account</span>
          <br />
          <div className="text-center">
            Nazwa:
            <input
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="login"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            Password:
            <input
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              id="haslo"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            Repeat Password:
            <input
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            Email:
            <input
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              value={email}
             onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">
              Register
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
