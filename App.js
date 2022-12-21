import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState()


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'>

        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Tarefas de Hoje!</Text>
          <View style={styles.items}>
            { }
          </View>

        </View>

      </ScrollView>



    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },

  taskWrapper: {
    paddingTop: 80,
    paddingLeft: 20,

  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },

  items: {
    marginTop: 30,

  },

});
