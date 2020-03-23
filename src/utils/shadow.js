import { StyleSheet } from 'react-native';

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
  };
}

export const styles = StyleSheet.create({
  shadow: { ...elevationShadowStyle(5) },
});
