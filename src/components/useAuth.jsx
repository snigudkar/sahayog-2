import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; 
// Custom hook for managing user authentication state
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth();

  // Monitor authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // Set user if logged in
        setIsLoggedIn(true);
      } else {
        setUser(null);   // Clear user data if logged out
        setIsLoggedIn(false);
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [auth]);

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return { isLoggedIn, user, handleLogout };
};

export default useAuth;