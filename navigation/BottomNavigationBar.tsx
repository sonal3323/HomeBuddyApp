import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Icon, Text, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

type NavItemProps = {
  iconName: string;
  label: string;
  isActive: boolean;
  onPress: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ iconName, label, isActive, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.navItem, isActive && styles.activeNavItem]}>
      <Icon as={MaterialIcons} name={iconName} size="lg" color={isActive ? 'white' : 'gray.500'} />
      {isActive && <Text style={styles.activeLabel}>{label}</Text>}
    </Pressable>
  );
};

const BottomNavigationBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <Box style={styles.navBar}>
      <HStack justifyContent="space-around" alignItems="center" style={styles.navContainer}>
        <NavItem iconName="home" label="Home" isActive={activeIndex === 0} onPress={() => setActiveIndex(0)} />
        <NavItem iconName="school" label="Explore" isActive={activeIndex === 1} onPress={() => setActiveIndex(1)} />
        <NavItem iconName="person" label="Learn" isActive={activeIndex === 2} onPress={() => setActiveIndex(2)} />
        <NavItem iconName="person" label="Profile" isActive={activeIndex === 3} onPress={() => setActiveIndex(3)} />
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#384C9C',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    color: 'white',
  },
  navContainer: {
    height: '100%',
  },
  navItem: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeNavItem: {
    fontSize: 16,
  },
  activeLabel: {
    color: 'white',
    marginTop: 4,
    fontSize: 12,
    fontFamily: 'PlaypenSans-Regular',
  },
});

export default BottomNavigationBar;
