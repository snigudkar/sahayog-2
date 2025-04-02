// // import { useState, useEffect } from 'react';
// // import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// // import { auth } from '../firebase';

// // const useAuth=()=>{
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [user, setUser] = useState(null);

// //   const auth = getAuth();

// //   useEffect(()=>{
// //     const unsubscribe=onAuthStateChanged(auth,(user)=>{
// //       if(user){
// //         setUser(user);
// //         setIsLoggedIn(true);

// //       }
// //       else{
// //         setUser(null);
// //         setIsLoggedIn(false);
// //       }
// //     });
// //     return()=>unsubscribe();
// //   },[auth]);

// //   const handleLogout=async()=>{
// //     try{
// //       await signOut(auth);
// //     }catch(error){
// //       console.error('Error signing out:',error);
// //     }
// //   };

// //   return{isLoggedIn,user,handleLogout};

// // };
// // export default useAuth;
// import { useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { auth } from '../firebase';

// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [userRole, setUserRole] = useState(null);
//   const db = getFirestore();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setUser(user);
//         setIsLoggedIn(true);

//         try {
//           const userDocRef = doc(db, 'users', user.uid);
//           const userDoc = await getDoc(userDocRef);

//           if (userDoc.exists()) {
//             setUserRole(userDoc.data().isAdmin ? 'admin' : 'user');
//           } else {
//             setUserRole('user');
//           }
//         } catch (error) {
//           console.error('Error fetching user role:', error);
//           setUserRole('user');
//         }
//       } else {
//         setUser(null);
//         setIsLoggedIn(false);
//         setUserRole(null);
//       }
//     });

//     return () => unsubscribe();
//   }, [auth, db]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   return { isLoggedIn, user, handleLogout, userRole };
// };

// export default useAuth;

import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('useAuth onAuthStateChanged - user:', user);
      if (user) {
        setUser(user);
        setIsLoggedIn(true);

        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserRole(userDoc.data().isAdmin ? 'admin' : 'user');
          } else {
            setUserRole('user');
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          setUserRole('user');
        }
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return { isLoggedIn, user, handleLogout, userRole };
};

export default useAuth;