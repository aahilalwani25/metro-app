import {Dimensions, StyleSheet} from 'react-native';
import colors from '../theme/colors';

const {width, height} = Dimensions.get('screen');

const mainStyles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 10,
  },
  fullScreen: {
    flex: 1,
  },
  primaryBackgroundColor: {
    backgroundColor: colors.background,
  },
  centerViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryTextColor: {
    color: colors.black3,
  },
  weight_800: {
    fontWeight: 800,
  },
  containerWidth: factor => ({
    width: width * factor,
  }),
  containerHeight: factor => ({
    height: height * factor,
  }),
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  bg_image: {
    position: 'absolute',
  },
});

export default {
  width,
  height,
  mainStyles,
};
