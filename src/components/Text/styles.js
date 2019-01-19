import { StyleSheet } from 'react-native';
import { highlighColor, defaultFont, titleFont } from '.././../commonStyles';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: highlighColor,
    fontFamily: defaultFont,
    fontSize: 14,
    textAlign: 'left',
  },
  title: {
    fontSize: 18,
    fontFamily: titleFont,
    textAlign: 'center',
  }
});
export default styles;
