import React, { Component } from 'react';
import { View, TouchableOpacity }  from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../';
import styles  from './styles';

export default class Button extends Component{

  static propTypes = {
    ...TouchableOpacity.propTypes,
    title: PropTypes.string,
  }

  render() {
    const {
      title,
      ...buttonProps
    } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} {...buttonProps}>
          <Text style={styles.text}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
