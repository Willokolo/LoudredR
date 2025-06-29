import { StyleProp, StyleSheet, TextStyle } from "react-native";

export const textSize = (size: number): StyleProp<TextStyle> => ({
    fontSize: size,
    color: '#fff',
    fontWeight: '500'
});