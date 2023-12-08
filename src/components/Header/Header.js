import "./Header.css"
import Logo from "./Logo.png"
import Vector from "./Vector.jpg"

export default function Header(){
    return(
        <div>
            <div className="head">
                <img src={Logo} className="logo"/>
                <nav>
                     <ul>
                         <a href=""><li>Destinations</li></a>
                         <a href=""><li>Hotels</li></a>
                         <a href=""><li>Flights</li></a>
                         <a href=""><li>Bookings</li></a>
                         <a href=""><li>login</li></a>
                     </ul>
                </nav>
                <div> <button>Sign up</button></div>
                <div className="en"><p>EN</p>
                <img src={Vector} className="vector"/>
                </div>
            </div>
               
            
                
            
        </div>
       )
    }
    

    
    
