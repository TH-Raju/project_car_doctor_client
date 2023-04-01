import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../context/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        logOut()
            .then(
                navigate('/login')
            )
            .catch(err => console.log(err))
    }
    const menuItems = <>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/'>Home</NavLink></li>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/services'>Services</NavLink></li>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/faq'>Faq</NavLink></li>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/contact'>Contact</NavLink></li>
        {
            user ? <>
                <li className='font-semibold'><NavLink activeClassName='is-active' to='/orders'>Orders</NavLink></li>
                <li className='font-semibold btn btn-outline btm-nav-sm rounded-xl' onClick={logout}><NavLink activeClassName='is-active' to='/login'>Log Out</NavLink></li>
            </>
                :
                <li className='font-semibold'><NavLink activeClassName='is-active' to='/login'>Log in</NavLink></li>
        }
    </>
    return (
        <div className="navbar h-20 mb-10 py-8 bg-white z-20 sticky top-0 shadow-lg shadow-gray-400 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} className="h-14" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="my-modal-8" className='btn btn-outline border-orange-700 text-orange-700 hover:bg-orange-700 hover:border-none'>Appoinment</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                <label htmlFor="my-modal-8" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h3 className="text-lg font-bold">Thanks for choosing us!</h3>
                        <p className="py-4">You can Choose any Service also You can Buy any Product from Us. Please fill free to visit Home page.</p>
                    </label>
                </label>
            </div>
        </div>
    );
};

export default Header;