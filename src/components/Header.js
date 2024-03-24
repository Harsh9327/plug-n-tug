/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo192.png";
import name from "../assets/NewProject.png";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const {  isAuthenticated, logout, user} = useAuth0();

  return (
    <header className="bg-gray-800 text-white p-2 flex justify-between items-center ">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-11 h-11 mr-2" />
        <img src={name} alt="logoname" className=" h-6" />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        </svg>
      </div>
      <div className="group relative">
        <button onClick={() => setHidden(!hidden)} className="flex items-center focus:outline-none">
          <FaUserCircle className='w-10 h-10 mr-3'/>
        </button>

        
        <div className={`${hidden ? "hidden" : ""}  group:block absolute right-0 mt-2 bg-white text-gray-800 p-2 rounded shadow `}>

        {
           isAuthenticated && (
            <div className='ps-2 mt-5'>
              <img className='h-16 w-16 rounded-full mx-auto'  src={user.picture} alt={user.name} />
              <h2 className='mt-3'>{user.name}</h2>
            </div>
            )
         }

            {/* <hr className="my-1" />

          <a to="#" className="block py-1 cursor-pointer">Profile</a>
          <a to="#" className="block py-1 cursor-pointer">Settings</a> */}
          <hr className="my-1" />

          {
            isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </button>) :
              ("")
          }

        </div>
      </div>
    </header>

  )
}
