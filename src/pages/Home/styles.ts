import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {height: Dimensions.get('screen').height},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default styles;
