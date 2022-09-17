import { createContext, useReducer, useEffect } from 'react'
import { useLogin } from '../hooks/useLogin';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch ] = useReducer(authReducer, {
    user: null,
  });

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch({type:useLogin, payload: user})
    }
  },[])
  
  console.log('Auth context: ', state)
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
};