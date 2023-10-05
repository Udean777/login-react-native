import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { API_URL, access_token, client_id, client_secret, refresh_token, expires_in } from 'react-native-dotenv';

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
    refresh_token: null
  });

  useEffect(() => {
    const checkTokenInStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem(access_token);
        const storedRefreshToken = await AsyncStorage.getItem(refresh_token);

        if (storedToken) {
          if (storedRefreshToken) {
            setAuthState({
              token: storedToken,
              refresh_token: storedRefreshToken,
              authenticated: true,
            });
            axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          } else {
            setAuthState({
              token: storedToken,
              refresh_token: null,
              authenticated: true,
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkTokenInStorage();
  }, []);

  const login = async (email, password) => {
    try {
      const tokenReq = {
        client_id,
        client_secret,
        grant_type: 'password',
        username: email,
        password: password,
        scope: '*',
      };

      const result = await axios.post(`${API_URL}/oauth/token`, tokenReq);

      setAuthState({
        token: result.data.access_token,
        refresh_token: result.data.refresh_token,
        authenticated: true,
        expires_in: result.data.expires_in,
      });

      axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.access_token}`;

      await AsyncStorage.setItem(access_token, result.data.access_token);

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    axios.defaults.headers.common['Authorization'] = '';

    setAuthState({
      token: null,
      authenticated: false,
      refresh_token: null,
      expires_in,
    });

      await AsyncStorage.removeItem(access_token);
      await AsyncStorage.removeItem(refresh_token);

      // axios.delete(`${API_URL}/api/logout`)

  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
