// import React,{useState} from "react";
// import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
// import {useNavigate} from "react-router-dom";

// const Login=()=>{
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const auth = getAuth();

//   const handleLogin=async(e)=>{
//     e.preventDefault();

//     try{
//       await signInWithEmailAndPassword(auth,email,password);
//       navigate("/");
//     }catch(error){
//       alert(`Login Failed:{$error.message}`);
// a
//     }
//   };



// return(
//   <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800">
//     <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl text-center font-bold text-orange-600 mb-6">
//         Sign In
//       </h2>
//       <form onSubmit={handleLogin}>
//         <input type="email"  placeHolder="Email" className="input-field mb-4 text-black" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//         <input type="password" placeHolder="Password" className="input-field mb-4 text-black" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//         <button type="submit" className="w-full mb-4 py-2 px-6 bg-gradient-to-r from-orange-500 to-orange-800
//         text-white font-semibold rounded-lg hover:bg-orange-700">
//           Login
//         </button>
//       </form>
//       <p className="text-center text-sm text-neutral-500">
//         Don't have an account? {" "}
//         <a href="/signup" className="text-orange-600">
//         Sign Up
//         </a>
//       </p>
//     </div>
//   </div>
// );
// };
// export default Login;

import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (isAdminLogin) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && userDoc.data().isAdmin) {
          navigate('/admin');
        } else {
          alert('Admin login failed. User is not an admin.');
        }
      } else {
        navigate('/');
      }
    } catch (error) {
      alert(`Login Failed: ${error.message}`);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-neutral-800'>
      <div className='max-w-lg w-full p-8 bg-white rounded-lg shadow-lg'>
        <h2 className='text-3xl text-center font-bold text-orange-600 mb-6'>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input type='email' placeholder='Email' className='input-field mb-4 text-black' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='input-field mb-4 text-black' value={password} onChange={(e) => setPassword(e.target.value)} />
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2 form-checkbox h-5 w-5 text-orange-600 rounded"
              checked={isAdminLogin}
              onChange={() => setIsAdminLogin(!isAdminLogin)}
            />
            <span className="text-black">Admin Login</span>
          </label>
          <button type='submit' className='w-full mb-4 py-2 px-6 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-lg hover:bg-orange-700'>
            Login
          </button>
        </form>
        <p className='text-center text-sm text-neutral-500'>
          Don't have an account? <a href='/signup' className='text-orange-600'>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;