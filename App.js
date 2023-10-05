import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import Navigation from './src/components/Navigation/Navigation';

export default function App() {
  const {authState} = useAuth()
  return (
    <AuthProvider>
      <NavigationContainer>
      {authState?.authenticated ? 
    ( 
      <BottomTabs/>
    )
     : (
    <Navigation/>
    )
    }
    </NavigationContainer>
    </AuthProvider>
  );
}
