import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../../constants/images';
import styles from './styles';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <ImageBackground style={styles.background} source={Images.background}>
      <View style={styles.container}>
        <Image source={Images.house} />
      </View>
    </ImageBackground>
  );
};

export default Home;
