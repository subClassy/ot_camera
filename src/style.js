import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");
const camHeight = (4 * winWidth) / 3;

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  preview: {
    width: winWidth,
    height: camHeight,
    top: winHeight / 4,
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
  slider: {
    width: winWidth * 0.67,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
});
