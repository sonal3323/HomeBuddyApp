import * as React from 'react';

//components
import { ScrollView } from 'native-base';
import { StyleSheet } from 'react-native';

// navigation
import CardComponent from '../../components/CardComponent';
import ItemDisplay from '../../components/ItemDisplay';

export const HomeScreen: React.FC<Props> = () => {
  return (
    <ScrollView style={styles.container}>
      <ItemDisplay />
      <CardComponent
        tag="Scientific thinking"
        imageUrl="../../assets/images/teacher-and-barber.svg"
        title="The Teacher and Barber"
        iconName="games"
      />
      <CardComponent
        tag="Scientific thinking"
        imageUrl="../../assets/images/summer-season.png"
        title="The Teacher and Barber"
        iconName="games"
      />
      <CardComponent
        tag="Language literacy"
        imageUrl="../../assets/images/language-literacy.png"
        title="The Teacher and Barber"
        iconName="games"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    fontFamily: 'PlaypenSans-Regular',
  },
});