import React from 'react';
import { Box, Text, VStack, HStack, Badge, IconButton, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type CardComponentProps = {
  tag: string;
  imageUrl: string;
  title: string;
  iconName: string;
};

const CardComponent: React.FC<CardComponentProps> = ({ tag, imageUrl, title }) => {
  return (
    <Box style={styles.card}>
      <VStack>
        <Image source={require('../assets/images/teacher-and-barber.png')} alt={title} style={styles.image} />
        <Badge style={styles.tag}>{tag}</Badge>
        <HStack alignItems="center" justifyContent="space-between" style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Image source={require('../assets/images/remote.png')} alt={title} />
        </HStack>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: '96%',
    marginTop: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 150,
    padding: 8,
  },
  iconImage: {

  },
  tag: {
    position: 'absolute',
    top: 16,
    left: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    borderBottomRightRadius: 0,
    borderColor: '#fff',
    color: '#fff',
    backgroundColor: '#ED1846',
  },
  content: {
    padding: 12,
    fontSize: 12,
    fontFamily: 'PlaypenSans-Regular',
    fontWeight: '600',
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontFamily: 'PlaypenSans-Regular',
    fontWeight: '600',
    color: '#2C2B2B',
  },
});

export default CardComponent;
