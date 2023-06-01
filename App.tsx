import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Text } from 'react-native';
import { useState } from 'react';
import { Loading } from './src/screens/Loading';

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(function () {
    setLoading(false);
  }, 4000);

  return (
    <>
      {loading ? <Loading /> : <Home />}
      <StatusBar style="light" />
    </>
  );
}
