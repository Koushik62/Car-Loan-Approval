
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo3.png'
import { Link } from 'react-router-dom'
const Navbar =()=>{

    const [menu, setmenu] = useState("Home");
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img className='logo' src={logo} alt=''/>
                <p>Vahanfin</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setmenu("Home")}}><Link style =  {{textDecoration:'none'}} to ='/'>Home</Link>{menu === "Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("About us")}}><Link style =  {{textDecoration:'none'}} to = '/AboutUs'>About us</Link>{menu === "About us"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Personal Loan")}}><Link style =  {{textDecoration:'none'}} to = '/personalloan'>Personal Loan</Link>{menu === "Personal Loan"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Used Car Loan")}}><Link style =  {{textDecoration:'none'}} to = '/usedcarloan'>Used Car Loan</Link>{menu === "Used Car Loan"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login'>

                {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            : <Link to = '/login'><button>Login</button></Link>}
            
              
                
            </div>
        </div>
    )
}

export default Navbar