import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Student Register</h1>

        <div className="links">
          <Link to="/home">
          <a >Home</a>
           </Link>
           <Link to="/create">
          <a  style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New detail</a>
          </Link>
          <Link to="/">
          <button className="delete">logout</button>
          </Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;