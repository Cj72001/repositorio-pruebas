import React, { useState, useEffect, useContext, createContext } from "react";

const API = "http://localhost:3001";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = async (email, password) => {
    const response = await fetch(`${API}/signin`, {
      method: "post",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const responseJSON = await response.json();
    if (!responseJSON) return { error: "We cannot connect" };
    else {
      if (responseJSON.error) {
        return responseJSON;
      } else {
        setUser({ token: responseJSON.token, ...responseJSON.user});
        return { success: true };
      }
    }
  };

  const signup = async (name, lastname, userName, email, password) => {
    const response = await fetch(`${API}/signup`, {
      method: "post",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ name, lastname, userName, email, password }),
    });
    const responseJSON = await response.json();
    if (!responseJSON) return { error: "We cannot connect" };
    else {
      if (responseJSON.error) {
        return responseJSON;
      } else {
        return { success: true };
      }
    }
  };

  const signout = () => {};

  const sendPasswordResetEmail = (email) => {};

  const confirmPasswordReset = (code, password) => {};

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  /*  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
*/
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
