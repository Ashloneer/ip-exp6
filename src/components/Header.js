import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faBriefcase, faLaptopCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Ayush Maurya</h1>
      <nav>
        <ul>
          <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to="/education"><FontAwesomeIcon icon={faGraduationCap} /> Education</Link></li>
          <li><Link to="/skills"><FontAwesomeIcon icon={faCogs} /> Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
