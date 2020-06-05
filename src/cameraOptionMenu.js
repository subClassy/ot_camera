import React from "react";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity, Slider } from "react-native";

import styles from "./style";

const { WhiteBalance: CameraWhiteBalance } = Camera.Constants;
const wbIconObject = {
  [CameraWhiteBalance.auto]: "wb-auto",
  [CameraWhiteBalance.cloudy]: "wb-cloudy",
  [CameraWhiteBalance.sunny]: "wb-sunny",
  [CameraWhiteBalance.incandescent]: "wb-incandescent",
  [CameraWhiteBalance.fluorescent]: "wb-iridescent",
};

const OptionMenu = ({
  cameraWhiteBalance = CameraWhiteBalance.auto,
  setWbMode,
  wbMenuVisible = false,
  handleWbMenu,
  zoomSliderVisible = false,
  handleZoomSlider,
  zoomValue,
  handleZoomValueChange,
  hideZoomSlider,
}) => (
  <Grid style={styles.topOptionMenu}>
    <Row>
      <Col style={styles.alignCenter}>
        <TouchableOpacity onPress={() => handleWbMenu(!wbMenuVisible)}>
          <MaterialIcons
            name={wbIconObject[cameraWhiteBalance]}
            color="white"
            size={35}
          />
        </TouchableOpacity>
      </Col>
      <Col style={styles.alignCenter}>
        <TouchableOpacity onPress={() => handleZoomSlider(!zoomSliderVisible)}>
          <MaterialIcons name="zoom-out-map" color="white" size={35} />
        </TouchableOpacity>
      </Col>
    </Row>
    {wbMenuVisible ? (
      <Row>
        <Col style={styles.alignCenter}>
          <TouchableOpacity onPress={() => setWbMode(CameraWhiteBalance.auto)}>
            <MaterialIcons name="wb-auto" color="white" size={25} />
          </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
          <TouchableOpacity
            onPress={() => setWbMode(CameraWhiteBalance.cloudy)}
          >
            <MaterialIcons name="wb-cloudy" color="white" size={25} />
          </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
          <TouchableOpacity onPress={() => setWbMode(CameraWhiteBalance.sunny)}>
            <MaterialIcons name="wb-sunny" color="white" size={25} />
          </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
          <TouchableOpacity
            onPress={() => setWbMode(CameraWhiteBalance.incandescent)}
          >
            <MaterialIcons name="wb-incandescent" color="white" size={25} />
          </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
          <TouchableOpacity
            onPress={() => setWbMode(CameraWhiteBalance.fluorescent)}
          >
            <MaterialIcons name="wb-iridescent" color="white" size={25} />
          </TouchableOpacity>
        </Col>
      </Row>
    ) : (
      <></>
    )}
    {zoomSliderVisible ? (
      <Row>
        <Col>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={zoomValue}
            onValueChange={(value) => handleZoomValueChange(value)}
            onSlidingComplete={() => hideZoomSlider()}
            style={styles.slider}
            minimumTrackTintColor="white"
            thumbTintColor="white"
          />
        </Col>
      </Row>
    ) : (
      <></>
    )}
  </Grid>
);

export default OptionMenu;
