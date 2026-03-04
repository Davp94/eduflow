import { LayoutDashboard, Moon, Search, Settings, Sun } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import './Header.css'
import { useContext } from "react";
import { ThemeContext } from "../state-management/ThemeContext";
function Header() {
    //COMPONENT LOGIC
    const location = useLocation();
    const isDashboard = location.pathname.includes('/dashboard');
    const themeContext = useContext(ThemeContext);

    const changeTheme = () => {
        themeContext?.toogleTheme()
    }
    //VISUAL COMPONENT
    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <div className="header-left">
                        <NavLink to="/" className="logo-link">
                            {isDashboard ? (
                                <>
                                    <div className="logo-icon"><LayoutDashboard size={20} className="text-white" /></div>
                                    <span className="logo-text">CourseManager</span>
                                </>
                            ) : (
                                <>
                                    <div className="logo-icon-blue">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                                    </div>
                                    <span className="logo-text">Eduflow</span>
                                </>
                            )}
                        </NavLink>
                    </div>
                    <nav className="header-nav">
                        {/* if (isDashboard) (<></>) else (<></>) */}
                        {isDashboard ? (
                            <>
                                <NavLink to="/dashboard" end className="nav-link">Dashboard</NavLink>
                                <NavLink to="/courses" className="nav-link">Courses</NavLink>
                                <NavLink to="/students" className="nav-link">Students</NavLink>
                                <NavLink to="/reports" className="nav-link">Reports</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/" className="nav-link">Home</NavLink>
                                <NavLink to="/dashboard" className="nav-link">Courses</NavLink>
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </>
                        )}

                    </nav>
                    <div className="header-actions">
                        {/* if(isDashbpard) (<></>) */}
                        {isDashboard && (
                            <>
                                <button className="icon-btn"><Search size={18} /></button>
                                <button className="icon-btn"><Settings size={18} /></button>
                            </>
                        )}
                        {/* if(!isDashbpard) (<></>) */}
                        {!isDashboard && (
                            <>
                                <button className="icon-btn" onClick={() => changeTheme()}>
                                    {themeContext?.theme == 'light' ? (<Moon size={18} />):(<Sun size={18}/>)}
                                    
                                </button>
                            </>
                        )}

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
