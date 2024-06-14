import React from 'react';
import { Image } from 'react-native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Box, Text, Icon, VStack, Progress } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

type ItemProps = {
  iconName: string;
  label: string;
  isActive: boolean;
};

const Item: React.FC<ItemProps> = ({ iconName, label, isActive }) => {
  return (
    <VStack alignItems="center" style={[styles.item, isActive && styles.activeItem]}>
      <Box style={styles.iconBox}>
        <Icon as={MaterialIcons} name={iconName} size="lg" color={isActive ? 'blue.500' : 'gray.500'} />
      </Box>
      <Text style={[styles.label, isActive && styles.activeLabel]}>{label}</Text>
    </VStack>
  );
};

const ItemDisplay: React.FC = () => {
  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View><Image source={require('../assets/images/do-today.png')} alt="Do today" /></View>
        <View><Image source={require('../assets/images/play.png')} alt="Play" /></View>
        <View><Image source={require('../assets/images/see.png')} alt="See" /></View>
        <View><Image source={require('../assets/images/see.png')} alt="See" /></View>
      </ScrollView>
      <Box style={styles.progressBarContainer}>
        <Box style={styles.progressBar}>
          <Progress value={30} mx={4} />
        </Box>
        <Text style={styles.progressText}>Do Today 30%</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  item: {
    alignItems: 'center',
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 8,
  },
  activeItem: {
    backgroundColor: '#e3f2fd',
    borderColor: '#bbdefb',
    borderWidth: 1,
  },
  iconBox: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  label: {
    marginTop: 4,
    fontSize: 14,
    color: 'gray',
    fontFamily: 'PlaypenSans-Regular',
  },
  activeLabel: {
    color: 'blue',
    fontWeight: 'bold',
    fontFamily: 'PlaypenSans-Regular',
  },

  progressBarContainer: {
    marginTop: 16,
    marginBottom: 32,
  },
  progressBar: {
    alignItems: 'center',
    backgroundColor: '#384C9C',
    borderRadius: 50,
    height: 10,
  },
  progressText: {
    textAlign: 'right',
    marginTop: 4,
    fontSize: 10,
    fontWeight: '700',
    color: '#384C9C',
    fontFamily: 'PlaypenSans-Regular',
  },
});

export default ItemDisplay;
