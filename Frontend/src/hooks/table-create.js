import React, { useState, useEffect, useContext, createContext } from "react";

const API = "http://localhost:3001";

const authContext = createContext();

// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [table, setTable] = useState(null);

  const createTable = async (title,expiration) => {
    const response = await fetch(`${API}/create-table`, {
      method: "post",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ title, expiration }),
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

  // Return the user object and auth methods
  return {
    table,
    createTable
  };
}
