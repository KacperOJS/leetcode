import {useContext,useState} from 'react'
import { LoginContext } from '../context/LoginContext'

const CreateAccount = () => {
		const wyslij=(e:any)=>{
			e.preventDefault();
			console.log('dziala');
			
		}
	const {username,setUsername,password,setPassword} = useContext(LoginContext);
	const [repeatPassword,SetrepeatPassword] = useState<string>('')
	const [email,setEmail]=useState<string>('');
  return (
	<div className="grid justify-center align-middle">
          <div>
		  <form onSubmit={wyslij}>
			<span className='flex justify-center'>Create Account</span><br/>
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
				value={repeatPassword}
				onChange={(e)=>{
					SetrepeatPassword(e.target.value)
				}}
				
				/>
			</div>
			<div className= 'text-center'>Repeat Password:
				<input 
				className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				type='password'
				value={password}
				onChange={(e)=>{
					setPassword(e.target.value)
				}}
				
				/>
			</div>
			<div className='text-center'>Email: 
				<input 
				className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				type='text'
				value={email}
				onChange={(e)=>{
					setEmail(e.target.value)
				}}
				/><br/>	
				<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 					 Register
				</button>
			</div>
	
			</form>

		</div> 
      </div>
  )
}

export default CreateAccount


