import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from '../common/theme';

function MaterialButtonDark(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={()=>{props.onPress()}}>
      <Text style={styles.caption}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: colors.BLACK,
    shadowOpacity: 0.35,
    shadowRadius: 5,
    paddingVertical: 12,
  },
  caption: {
    color: colors.WHITE,
    fontSize: 22,
    fontFamily: "Roboto-Regular"
  }
});

export default MaterialButtonDark;
