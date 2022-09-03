import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"><h1>Workout Buddy</h1></Link>
        <div>
          <Link to="/login"><h3>Login</h3></Link>
          <Link to="/signup"><h3>Signup</h3></Link>
        </div>

      </div>
    </header>
  );
}
export default Navbar;
