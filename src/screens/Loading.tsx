import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Loading: React.FC = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Logo}>to.do</Text>
      <Text style={styles.Text}>Seu aplicativo</Text>
      <Text style={styles.Text}>favorito de afazeres</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#442F74',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Text: {
    color: '#FFF',
    fontSize: 22,
  },
});
