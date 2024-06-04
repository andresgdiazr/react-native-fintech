import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/components/organism/LoginScreen';
import MultiForm from './src/rutas/Registro/MultiForm';

export default function App() {
  return (
    <View style={styles.container}>
      <MultiForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
