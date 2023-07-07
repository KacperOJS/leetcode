import {useContext} from 'react'
import { LoginContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const {username,setUsername,password,setPassword,setLoggedIn} = useContext(LoginContext);
	const navigate= useNavigate();
	const Logowanie=(e:any)=>{
		e.preventDefault();
		fetch('http://localhost:3001/api/data')
		.then(res =>res.json())
		.then(data => {
			const userExists = data.some((obj:any) => obj.username === username && obj.password === password);
			if(userExists){
				alert(`Logged in to ${username}`)
				setLoggedIn(true)
				navigate('/UserInfo')
			}else{
				console.log('User does not Exist try again');	
			}
		}).catch((error) => {
			console.log('Error:', error);
		  });
		
	}

  return (
	<div className="grid justify-center align-middle">
		
          <div>
		  <form onSubmit={Logowanie}>
			<span className='flex justify-center'></span><br/>
			<div className='text-center'>Nazwa: 
				<input 
				className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				type='text'
				value={username}
				onChange={(e)=>{
					setUsername(e.target.value)
				}}
				/>
			</div>
			<div className= 'text-center'>Password:
				<input 
				className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				type='password'
				value={password}
				onChange={(e)=>{
					setPassword(e.target.value)
				}}
				/><br/>	
				<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 					 Log In
				</button>
			</div>
			</form>
		

		</div> 
      </div>
  )
}

export default Login


