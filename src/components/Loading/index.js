import React, { Component } from 'react';
import { View, Text, ActivityIndicator }  from 'react-native';
import styles  from './styles';

export default class Loading extends Component{

  render() {
    return (
      <View styles={{flex: 1, alignItems: 'center',}}>
        <Text style={styles.text}>
          A long time ago in a galaxy far, far away...
        </Text>
        <ActivityIndicator size='large' color='white'/>
      </View>
    );
  }
}
