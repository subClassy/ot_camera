import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  preview: {
    height: winHeight,
    width: winWidth,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  alignCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomToolbar: {
    width: winWidth,
    position: "absolute",
    height: 100,
    bottom: 0,
  },
  topOptionMenu: {
    width: winWidth,
    position: "absolute",
    height: 100,
    top: 25,
  },
  captureBtn: {
    width: 70,
    height: 70,
    borderWidth: 7,
    borderRadius: 70,
    borderColor: "#FFFFFF",
  },
  captureBtnInternal: {
    width: 56,
    height: 56,
    borderWidth: 2,
    borderRadius: 56,
    backgroundColor: "white",
    borderColor: "transparent",
  },
  captureBtnInternalActive: {
    width: 56,
    height: 56,
    borderWidth: 2,
    borderRadius: 56,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignSelf: "center",
    borderColor: "transparent",
  },
  galleryContainer: {
    bottom: 100,
  },
  galleryImageContainer: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  galleryImage: {
    width: 75,
    height: 75,
  },
});
