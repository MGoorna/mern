import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/"><h1>Workout Buddy</h1></Link>
        <nav>
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
          <div>
            <Link to="/login"><h3>Login</h3></Link>
            <Link to="/signup"><h3>Signup</h3></Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
