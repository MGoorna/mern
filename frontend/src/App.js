import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Navbar from './components/Navbar';
import Signup from '../src/pages/Signup'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/login'
              element={<Login/>}
            />
            <Route
              path='/signup'
              element={<Signup/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
