import React, { Component } from 'react';
import { View, Text as TextComponent }  from 'react-native';
import PropTypes from 'prop-types';
import styles  from './styles';

export default class Text extends Component{

  static propTypes = {
    ...TextComponent.propTypes,
    title: PropTypes.bool,
  }

  render() {
    return (
      <View style={styles.container}>
        <TextComponent style={[
          styles.text,
          this.props.title ? styles.title : {},
          this.props.style
        ]}>
          {this.props.children}
        </TextComponent>
      </View>
    );
  }
}
