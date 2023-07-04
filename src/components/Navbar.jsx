import { DiCompass } from 'react-icons/di';
import lock from '../assets/lock.svg';
import hamburgerMenu from '../assets/hamburgerMenu.svg';
import close from '../assets/close.svg';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <Link to="/">
          <span className="font-extrabold text-green-700 text-2xl flex items-center">
            <DiCompass className="-mr-1 mt-0.5" />
            Career
            <span className="text-[#3AA6B9] underline underline-offset-8">
              Nav
            </span>
          </span>
        </Link>
        <div className="hidden md:flex gap-4">
          <ul className="flex gap-4">
            <Link to="/">
              <li className="cursor-pointer text-emerald-500 hover:text-gray-500">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer text-emerald-500 hover:text-gray-500">
                About Me
              </li>
            </Link>
            <Link to="/services">
              <li className="cursor-pointer text-emerald-500 hover:text-gray-500">
                Services
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          {isAuthenticated ? (
            <div className="flex items-center">
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <button
                className="px-8 py-3 rounded-lg bg-[#20B486] text-white font-semibold"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button
              className="flex justify-between items-center bg-transparent px-6 py-3"
              onClick={() => loginWithRedirect()}
            >
              <img src={lock} alt="SignIn" />
              Login
            </button>
          )}
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={toggle ? close : hamburgerMenu}
            className={`hamburger-icon ${toggle ? 'open' : ''} cursor-pointer`}
            alt="Toggle Menu"
          />
        </div>
      </div>
      <div
        className={`${
          toggle
            ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b'
            : 'hidden'
        }`}
      >
        <ul>
          <Link to="/">
            <li className="p-4 cursor-pointer hover:bg-gray-100 hover:text-gray-500  text-emerald-500">
              Home
            </li>
          </Link>
          <Link to="/footer">
            <li className="p-4 hover:bg-gray-100 cursor-pointer  hover:text-gray-500 text-emerald-500">
              Contact Us
            </li>
          </Link>
          <Link
            to="/services"
            className="p-4 hover:bg-gray-100 cursor-pointer block w-full text-emerald-500 hover:text-gray-500 "
          >
            Services
          </Link>
          <div className="flex flex-col my-4 gap-4">
            {isAuthenticated ? (
              <div className="flex items-center">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4"
              >
                <img src={lock} alt="SignIn" />
                Login
              </button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
