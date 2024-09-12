import { ReactNode, createContext, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { firebaseApp } from "../firebaseConfig";

const auth = getAuth(firebaseApp);

interface IUserContext {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
}

export const UserContext = createContext<IUserContext | null>(null);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const loginWithEmail = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setUser(result.user);
  };

  return (
    <UserContext.Provider value={{ user, loginWithGoogle, loginWithEmail }}>
      {children}
    </UserContext.Provider>
  );
};
