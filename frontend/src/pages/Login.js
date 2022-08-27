import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassworsd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
  }
  return ( 
  <form className='loginForm'>
    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" value={password} onChange={(e)=>{setPassworsd(e.target.value)}}/>
    <button type="submit" onClick={handleSubmit}>Login</button>
  </form> 
  );
}
 
export default Login;