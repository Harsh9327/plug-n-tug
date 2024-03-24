import logo1 from "../assets/NewProject.png"
import logo2 from "../assets/RRevstation.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

export const Firstpage = () => {

   const { user, loginWithRedirect, isAuthenticated } = useAuth0();
   console.log("Current user",user)
   const navigation = useNavigate();

   // window.localStorage.getItem("isLoggedIn",true)
  return (
     <>
        <div className="w-90 mx-auto h-90">
            <div>
               <img src={logo1} alt='logo' className='w-9/12 mx-auto h-9/12 pt-9 object-contain'/>
            </div>
           
            <div>
               <img src={logo2} alt="Logo" className='w-100% h-300 mt-8 object-cover' />
            </div>  
          
            <h1 className='mt-8 font-bold text-2xl w-11/12 mx-auto'>Your Ultimate EV Charging station finder app</h1>

            <div className='w-11/12 flex-col ml-4'>
               <p>find EV charging station near you, plan trip and so</p>
               <p>much more in just one click</p>
               <p>welcome to the loginscreen first create a account</p>
            </div>
               
         
         <div className='flex bg-gray-700 w-64 h-11 mt-7 text-white mx-auto rounded-3xl'>
                 <button onClick = {() => loginWithRedirect()} className="mx-auto">Get Started</button>
         </div>

         {
            isAuthenticated ? (navigation("/mainpage")) : ("")
          }
                       
       </div>
     </>
  )
}
