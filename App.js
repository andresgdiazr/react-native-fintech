import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StoreHome from './src/screens/StoreHome';
import SafeArea from "./src/components/atoms/SafeArea";

export default function App() {
  return (
    <SafeArea>
      <StoreHome></StoreHome>
    </SafeArea >
  );
}

