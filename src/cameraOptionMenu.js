import React from "react";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import styles from "./style";

const { WhiteBalance: CameraWhiteBalance } = Camera.Constants;
