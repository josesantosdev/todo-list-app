import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


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
            {}

          </View>

        </View>

      </ScrollView>

      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Escreva uma Tarefa"
          value={task}
          onChangText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>

        </TouchableOpacity>

      </KeyboardAvoidingView>


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
  writeTaskWrapper: {
    positon: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  addText: {
    fontSize: 24,

  },

});
