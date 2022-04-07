import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {

  },

  fullWidth: {
    width: "100%",
  },

  column: {
    flexDirection: "column",
  },

  row: {
    flexDirection: "row",
  },

  alignStart: {
    alignItems: "flex-start",
  },

  alignCenter: {
    alignItems: "center",
  },

  alignEnd: {
    alignItems: "flex-end",
  },

  justifyStart: {
    justifyContent: "flex-start",
  },

  justifyCenter: {
    justifyContent: "center",
  },

  justifyEnd: {
    justifyContent: "flex-end",
  },

  justifySelfEnd: {
    marginLeft: "auto",
  },

  spaceBetween: {
    justifyContent: "space-between",
  },

  spaceEven: {
    justifyContent: "space-evenly",
  },

  padded: {
    padding: 24,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  leftSide: {
    paddingRight: 4,
    width: "50%",
  },
  rightSide: {
    paddingLeft: 4,
    width: "50%",
  },
  bottomRounded: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  wrap: {
    flexWrap: 'wrap'
  }
});

export default styles;
