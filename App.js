import React, { useState } from 'react';
import { View, Text, Image, Switch, Button } from 'react-native';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Style Gen Studio</Text>
        <Image
            source={require('./assets/company-image.png')}
            style={{ width: 160, height: 128 }}
        />
        <View style={styles.checkboxContainer}>
          <Switch
              value={isChecked}
              onValueChange={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkboxLabel}>I agree to the terms</Text>
        </View>
        <Button
            title="Continue"
            disabled={!isChecked}
            onPress={() => console.log('Button pressed!')}
        />
      </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#333333"
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  getStartedButton: {
    backgroundColor: '#D5AB85',
    borderRadius: 10
  }
};

export default App;