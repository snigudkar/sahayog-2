import React, { useState } from 'react'; 
import { navItems } from '../constants'; 
import { Menu, X } from 'lucide-react'; 
import useAuth from './useAuth';  // Import the custom hook

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const { isLoggedIn, handleLogout, user } = useAuth();  // Destructure 'user' from the useAuth hook

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <div>
            <nav className='sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80'>
                <div className='container px-4 mx-auto relative lg:text-sm'>
                    <div className='flex justify-between items-center'>
                        {/* Logo Section */}
                        <div className='flex items-center flex-shrink-0'>
                            <h2 className='text-2xl font-bold'>Sahayog</h2>
                        </div>

                        {/* Desktop Navigation Menu */}
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Sign In/Sign Up or Logout Buttons */}
                        <div className='hidden lg:flex justify-center space-x-6 items-center'>
                            {isLoggedIn ? (
                                <>
                                    {/* Welcome Message with User's Email */}
                                    <span className="text-sm text-neutral-500">Welcome, {user.email}</span>
                                    <button
                                        onClick={handleLogout}
                                        className='py-2 px-3 border rounded-md'>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href='/login' className='py-2 px-3 border rounded-md'>
                                        Sign In
                                    </a>
                                    <a
                                        href='/signup'
                                        className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                                        Sign Up
                                    </a>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='lg:hidden md:flex flex-col justify-end'>
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Drawer */}
                    {mobileDrawerOpen && (
                        <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Sign In/Sign Up or Logout Buttons */}
                            <div className='flex space-x-6'>
                                {isLoggedIn ? (
                                    <>
                                        {/* Mobile Welcome Message */}
                                        <span className="text-sm text-neutral-500">Welcome, {user.email}</span>
                                        <button
                                            onClick={handleLogout}
                                            className='py-2 px-3 border rounded-md'>
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <a href='/login' className='py-2 px-3 border-rounded-md'>
                                            Sign In
                                        </a>
                                        <a
                                            href='/signup'
                                            className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                                            Sign Up
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;



                        











                        
