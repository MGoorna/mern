import { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassworsd] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
  }

  return ( 
    <form>
    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" value={password} onChange={(e)=>{setPassworsd(e.target.value)}}/>
    <button type="submit" onClick={handleSubmit}>Login</button>
    </form> 
  );
}
 
export default Signup;