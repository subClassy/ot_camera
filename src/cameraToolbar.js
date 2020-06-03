import React from "react";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import styles from "./style";

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

const Toolbar = ({
  capturing = false,
  cameraType = CameraTypes.back,
  flashMode = CameraFlashModes.off,
  setFlashMode,
  setCameraType,
  onCaptureIn,
  onCaptureOut,
  onShortCapture,
}) => (
  <Grid style={styles.bottomToolbar}>
    <Row>
      <Col style={styles.alignCenter}>
        <TouchableOpacity
          onPress={() =>
            setFlashMode(
              flashMode === CameraFlashModes.torch
                ? CameraFlashModes.off
                : CameraFlashModes.torch
            )
          }
        >
          <Ionicons
            name={
              flashMode == CameraFlashModes.torch ? "md-flash" : "md-flash-off"
            }
            color="white"
            size={30}
          />
        </TouchableOpacity>
      </Col>
      <Col size={2} style={styles.alignCenter}>
        <TouchableWithoutFeedback
          onPressIn={onCaptureIn}
          onPressOut={onCaptureOut}
          onPress={onShortCapture}
        >
          <View style={[styles.captureBtn]}>
            {capturing ? (
              <View style={styles.captureBtnInternalActive} />
            ) : (
              <View style={styles.captureBtnInternal} />
            )}
          </View>
        </TouchableWithoutFeedback>
      </Col>
      <Col style={styles.alignCenter}>
        <TouchableOpacity
          onPress={() =>
            setCameraType(
              cameraType === CameraTypes.back
                ? CameraTypes.front
                : CameraTypes.back
            )
          }
        >
          <Ionicons name="md-reverse-camera" color="white" size={30} />
        </TouchableOpacity>
      </Col>
    </Row>
  </Grid>
);

export default Toolbar;
