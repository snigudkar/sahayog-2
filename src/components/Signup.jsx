// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const SignUp=()=> {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();
//   const auth = getAuth();

//   const handleSignUp=async(e)=>{
//     e.preventDefault();

//     if(password!=confirmPassword){
//       alert("Passwords do not match!!");
//       return;
//     }
//     try{
//       await createUserWithEmailAndPassword(auth,email,password);
//       navigate("/");
//     }catch(error){
//       alert(`Sign Up failed: {$error.message}`);
//     }
    
//   };
  
//   return(
//     <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800">
//       <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl text-center font-bold text-orange-600 mb-6">
//           Sign Up
//         </h2>
//         <form onSubmit={handleLogin}>
//           <input type="email"  placeHolder="Email" className="input-field mb-4 text-black" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//           <input type="password" placeHolder="Password" className="input-field mb-4 text-black" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//           <input type="password" placeHolder="Confirm Password" 
//           className="input-field mb-4 text-black" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
//           <button type="submit" className="w-full mb-4 py-2 px-6 bg-gradient-to-r from-orange-500 to-orange-800
//           text-white font-semibold rounded-lg hover:bg-orange-700">
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center text-sm text-neutral-500">
//           Already have an account? {" "}
//           <a href="/login" className="text-orange-600">
//           Login 
//           </a>
//         </p>
//       </div>
//     </div>
//   );

// };
// export default SignUp;

import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdminSignup, setIsAdminSignup] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!!');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        isAdmin: isAdminSignup,
      });

      navigate('/');
    } catch (error) {
      alert(`Sign Up failed: ${error.message}`);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-neutral-800'>
      <div className='max-w-lg w-full p-8 bg-white rounded-lg shadow-lg'>
        <h2 className='text-3xl text-center font-bold text-orange-600 mb-6'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input type='email' placeholder='Email' className='input-field mb-4 text-black' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='input-field mb-4 text-black' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type='password' placeholder='Confirm Password' className='input-field mb-4 text-black' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2 form-checkbox h-5 w-5 text-orange-600 rounded"
              checked={isAdminSignup}
              onChange={() => setIsAdminSignup(!isAdminSignup)}
            />
            <span className="text-black">Admin Signup</span>
          </label>
          <button type='submit' className='w-full mb-4 py-2 px-6 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-lg hover:bg-orange-700'>
            Sign Up
          </button>
        </form>
        <p className='text-center text-sm text-neutral-500'>
          Already have an account? <a href='/login' className='text-orange-600'>Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;