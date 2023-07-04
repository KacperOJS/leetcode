import React from 'react';

interface LoginProps {
  isLoginVisible: boolean;
}

const Login: React.FC<LoginProps> = ({ isLoginVisible,}) => {
  return (
    <>
      <div className="grid justify-center">
        {isLoginVisible ?  <div>Login</div> :null }
      </div>
    </>
  );
};

export default Login;
