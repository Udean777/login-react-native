import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import Navigation from './src/components/tabs/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </AuthProvider>
  );
}
