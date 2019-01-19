import { StyleSheet } from 'react-native';
import { highlighColor } from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: highlighColor,
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  }
});
export default styles;
