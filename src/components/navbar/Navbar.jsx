import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";

function Navbar(){

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(true);

    const handleSignOut = () => {
        setUser(false);
    }

    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                <img src="/logo.png" alt="logo" />
                <span>प्रॉपर्टी <span style={{ color: "#FFD700", fontWeight: 'bold' }}>Dekho</span></span>
                </a>
                <a href="/">Home</a>
                <a href="/">Contact Us</a>
                <a href="/">About Us</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="" />
                        <span>Vaibhav Pandey</span> 
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                        <div className="sign"><span onClick={handleSignOut}>SignOut</span></div>
                    </div>
                ) : (
                    <>
                        <a href="/" className="register">Sign In</a>
                        <a href="/" className="register">Sign Up</a>
                    </>
                )}
                
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
                </div>
                <div className={open?"menu active":"menu"}>
                    <a href="/">Home</a>
                    <a href="/">Contact Us</a>
                    <a href="/">About Us</a>
                    <a href="/">Agents</a>
                    { !user && (
                        <>
                            <a href="/">Sign In</a>
                            <a href="/">Sign Up</a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
