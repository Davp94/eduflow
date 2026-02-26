import { Moon } from "lucide-react"
import { NavLink } from "react-router-dom"
import './Header.css'
function Header() {
  //COMPONENT LOGIC
  
  //VISUAL COMPONENT
  return (
    <>
        <header>
            <div className="header-container">
                <div className="header-left">
                    <NavLink to="/" className="logo-link">
                        <div className="logo-icon-blue">
                            <svg></svg>
                        </div>
                        <span className="logo-text">Eduflow</span>
                    </NavLink>
                </div>
                <nav className="header-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Courses</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
                <div className="header-right">
                    <button className="icon-btn"><Moon size={18}/></button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
