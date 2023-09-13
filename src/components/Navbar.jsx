import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data.jsx';
import logo from '../logo.svg';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
