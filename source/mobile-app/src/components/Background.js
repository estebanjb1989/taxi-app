import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../common/theme'

export default function Background(props) {
  return (
    <View style={styles.background}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.BACKGROUND,
    width: '100%',
    height: '100%',
    flex: 1
  }
});
