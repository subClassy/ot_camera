import React from "react";
import { View, Text, Alert } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

import styles from "./style";
import Toolbar from "./cameraToolbar";
import Gallery from "./gallery";

class CameraPage extends React.Component {
  camera = null;

  state = {
    captures: [],
    flashMode: Camera.Constants.FlashMode.off,
    capturing: null,
    cameraType: Camera.Constants.Type.back,
    hasCameraPermission: null,
    hasCameraRollPermission: null,
  };

  setFlashMode = (flashMode) => this.setState({ flashMode });
  setCameraType = (cameraType) => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  handleCaptureOut = () => {
    if (this.state.capturing) {
      this.setState({ capturing: false });
    }
  };

  handleShortCapture = async () => {
    const photoData = await this.camera.takePictureAsync();
    const { uri } = photoData;
    await MediaLibrary.saveToLibraryAsync(uri);

    this.setState({
      capturing: false,
      captures: [photoData, ...this.state.captures],
    });
  };

  async componentDidMount() {
    await this.getCameraPermissions();
  }

  async getCameraPermissions() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    if (camera.status === "granted") {
      this.setState({ hasCameraPermission: true });
    } else {
      this.setState({ hasCameraPermission: false });
      console.log("Uh oh! The user has not granted us permission.");
    }
    await this.getCameraRollPermissions();
  }

  async getCameraRollPermissions() {
    const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (cameraRoll.status === "granted") {
      this.setState({ hasCameraRollPermission: true });
    } else {
      this.setState({ hasCameraRollPermission: false });
      console.log("Uh oh! The user has not granted us permission.");
    }
  }

  render() {
    const {
      hasCameraPermission,
      hasCameraRollPermission,
      flashMode,
      cameraType,
      capturing,
      captures,
    } = this.state;

    if (hasCameraPermission === null || hasCameraRollPermission === null) {
      return <View />;
    } else if (
      hasCameraPermission === false ||
      hasCameraRollPermission === false
    ) {
      return (
        <Text style={styles.preview}>
          Required Permissions have been denied.
        </Text>
      );
    }

    return (
      <React.Fragment>
        <View>
          <Camera
            type={cameraType}
            flashMode={flashMode}
            style={styles.preview}
            ref={(camera) => (this.camera = camera)}
          />
        </View>

        {captures.length > 0 && <Gallery captures={captures} />}

        <Toolbar
          capturing={capturing}
          flashMode={flashMode}
          cameraType={cameraType}
          setFlashMode={this.setFlashMode}
          setCameraType={this.setCameraType}
          onCaptureIn={this.handleCaptureIn}
          onCaptureOut={this.handleCaptureOut}
          onShortCapture={this.handleShortCapture}
        />
      </React.Fragment>
    );
  }
}

export default CameraPage;
