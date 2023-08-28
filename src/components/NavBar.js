
import '../NavBar.css';
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div id="header">
        <div class="logo">
          <a href="#">Eco-Choice</a>
        </div>
        <nav>
          <form class="search" action="search.php">
            <input name="q" placeholder="Search..." type="search" />
          </form>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li class="dropdown">
              <Link to="/Login">Sign-in</Link>
            </li>
            <li>
              <Link to="/RegistrationForm">Sign-up</Link>
            </li>
            <li>
              <a href="">Log-out</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;