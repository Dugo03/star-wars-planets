import React, { Component } from 'react';
import { View, ViewPropTypes }  from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../';
import styles  from './styles';

export default class Card extends Component{

  static propTypes = {
    ...ViewPropTypes,
    title: PropTypes.string,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text title>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
