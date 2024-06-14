import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Icon, Image, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const TopNavigationBar: React.FC = () => {
  return (
    <Box style={styles.navBar}>
      <HStack justifyContent="space-between" alignItems="center" style={styles.navContainer}>
        <Image source={require('../assets/images/logo.png')} alt="Logo" style={styles.logo} />
        <HStack space={4}>
          <Pressable onPress={() => console.log('Microphone Pressed')}>
            <Icon as={MaterialIcons} name="mic-none" size="lg" color="black" />
          </Pressable>
          <Pressable onPress={() => console.log('Notifications Pressed')}>
            <Icon as={MaterialIcons} name="notifications" size="lg" color="black" />
          </Pressable>
          <Pressable onPress={() => console.log('Messages Pressed')}>
            <Icon as={MaterialIcons} name="chat-bubble-outline" size="lg" color="black" />
          </Pressable>
        </HStack>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 24,
    justifyContent: 'center',
    shadowColor: 'rgba(#000, 0.6)',
    marginTop: 32,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
  },
});

export default TopNavigationBar;
