import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import EmployeeAddOrEdit from "./EmployeeAddOrEdit";
import Home from "./Home";

const Navbar = () => {
  return ( 
  	<nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
      
          <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>

              <Link
                className="navbar-item"
                to="/Add"
              >
                Add
              </Link>
            
          </div>  
      </div>
    </nav>
  );
 };

 export default Navbar;