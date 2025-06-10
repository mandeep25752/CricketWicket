/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {useContext, createContext, useState, useEffect} from 'react';
import {isEmpty} from '../utils/commons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserContextType = {
  user: any | null;
  saveUser: (user?: any | null, token?: string) => Promise<void>;
  isLoggedIn: boolean;
  logout: (redirect?: boolean) => void;
  isLoadingAuth?: boolean;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}: any) => {
  const {user, saveUser, isLoggedIn, logout, isLoadingAuth} = useProviderUser();
  return (
    <UserContext.Provider
      value={{user, saveUser, isLoggedIn, logout, isLoadingAuth}}>
      {children}
    </UserContext.Provider>
  );
};

const useProviderUser = () => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    const loggedInData = async () => {
      try {
        const data: any = await AsyncStorage.getItem('user');
        const localUser = JSON.parse(data);
        if (localUser) {
          setUser(localUser);
        }
        setIsLoadingAuth(false);
      } catch (err) {
        logout();
        setIsLoadingAuth(false);
      }
    };
    loggedInData();
  }, []);

  const saveUser = async (user: any, token?: string) => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    const expiryDate = new Date();

    expiryDate.setMonth(expiryDate.getMonth() + 1);
    setUser(user);
    if (token) {
      await AsyncStorage.setItem('access-token', token);
    }
  };
  const logout = async () => {
    setUser(null);
    await AsyncStorage.clear();
  };

  const isLoggedIn: boolean = !!(user && !isEmpty(user));

  return {
    user,
    saveUser,
    isLoggedIn,
    logout,
    isLoadingAuth,
  };
};

export const useUser = () => {
  return useContext(UserContext) as UserContextType;
};
