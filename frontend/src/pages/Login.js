import { useState } from 'react';
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const { login, isLoading, error } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassworsd] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password)
  }
  return ( 
  <form className='loginForm'>
    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" value={password} onChange={(e)=>{setPassworsd(e.target.value)}}/>
    <button type="submit" onClick={handleSubmit} disabled={isLoading}>Login</button>
    {error && <div className="error">{error}</div>}
  </form> 
  );
}
 
export default Login;