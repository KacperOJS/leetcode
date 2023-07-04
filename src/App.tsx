import Header2 from "./pages/Header2"
import { LoginContext } from "./context/LoginContext"
import { useState } from "react"
import UserInfo from "./pages/UserInfo";
import Login from "./pages/Login";
const App = () => {
	const [username,setUsername]= useState<string>('');
	const [password,setPassword]=useState<string>('');
	const [LoggedIn,setLoggedIn]=useState<boolean>(false);
  return ( 
	<div className="">
		<LoginContext.Provider value={{username,setUsername ,password,setPassword,setLoggedIn}}>
			<Header2/>
			{LoggedIn ? <UserInfo/> : <Login/>}
		</LoginContext.Provider>
	</div>
  )
}

export default App