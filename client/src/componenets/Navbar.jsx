import React, {useContext} from 'react'
import Logo from '../images/images.jpg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
function Navbar() {
    const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='link'>
                <Link className='link' to="/?cat=art">
                    <h4>Art</h4></Link>
                   < Link className='link' to="/?cat=science">
                    <h4>Science</h4></Link>
                    < Link className='link' to="/?cat=cinema">
                    <h4>Cinema</h4></Link>
                    < Link className='link' to="/?cat=tech">
                    <h4>Tech</h4></Link>
                    < Link className='link' to="/?cat=food">
                    <h4>Food</h4></Link>
                    < Link className='link' to="/?cat=design">
                    <h4>Design</h4></Link>
                    <span>{currentUser?.username}</span>
            {currentUser ?<span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
                    <span className='write'>
                        <Link className='link' to="/write">Write</Link>
                    </span>
            </div>

        </div>
    </div>
  )
}

export default Navbar