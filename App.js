// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import LoginScreen from './src/components/organism/LoginScreen';
import MultiForm from './src/rutas/Registro/MultiForm';
import StoreHome from './src/screens/StoreHome';
import SafeArea from "./src/components/atoms/SafeArea";

export default function App() {
  return (
    <SafeArea>
      <StoreHome></StoreHome>
    </SafeArea >
  );
}

