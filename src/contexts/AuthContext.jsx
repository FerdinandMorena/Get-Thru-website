import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email, password, fullName) => {
    try {
      // Mock sign up - just simulate success
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        full_name: fullName,
      };
      
      setUser(mockUser);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signIn = async (email, password) => {
    try {
      // Mock sign in - just simulate success
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
      };
      
      setUser(mockUser);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signOut = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
