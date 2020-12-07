import './App.css';
import {useState} from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
        <header className="header">
          <h1>Start Bootstrap</h1>
          <nav className="nav-bar">
            <p className="nav-menu-item">SERVICES</p>
            <p className="nav-menu-item">PORTFOLIO</p>
            <p className="nav-menu-item">ABOUT</p>
            <p className="nav-menu-item">TEAM</p>
            <p className="nav-menu-item">CONTACT</p>
          </nav>
        <div onClick={toggleMenu} className="menu-btn">
          <p className="ham-text">MENU</p>
          <img className="ham-img" src="https://borghisbythebay.com/photos/hamburger-icon.png"/>
        </div>
        
        <nav className= {`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
          <p>SERVICES</p>
          <p className="mobile-nav-item">PORTFOLIO</p>
          <p className="mobile-nav-item">ABOUT</p>
          <p className="mobile-nav-item">TEAM</p>
          <p className="mobile-nav-item">CONTACT</p>
        </nav>
        </header>
        
        <div className="main">
          <p className="welcome" >Welcome To Our Studio!</p>
          <p className="big-title">IT'S NICE TO MEET YOU</p>
          <button className="tell-btn">TELL ME MORE</button>
      </div>
    </div>
  );
}

export default App;
