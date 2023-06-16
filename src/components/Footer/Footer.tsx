import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Images from '../../constants/images';
import styles from './styles';

const Footer = () => {
  return (
    <ImageBackground
      resizeMethod="auto"
      source={Images.retangulo}
      style={styles.retangulo}>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={Images.hover} />
        </TouchableOpacity>
        <ImageBackground source={Images.subtract} style={styles.subtract}>
          <TouchableOpacity>
            <Image source={Images.button} style={styles.button} />
          </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity>
          <Image source={Images.Symbol} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Footer;
