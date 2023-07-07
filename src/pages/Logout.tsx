import {useContext,useEffect} from 'react'
import { LoginContext } from '../context/LoginContext'
import { Link } from 'react-router-dom'

const Logout = () => {
	const {setLoggedIn} = useContext(LoginContext)
	useEffect(()=>{
		setLoggedIn(false);
	},[])
  return (
	<div>You just Logged Out you wanna log in again? <Link to='/login' className="text-purple-800 underline">Login</Link></div>
  )
}

export default Logout