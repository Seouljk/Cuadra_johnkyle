import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TodoList = () => {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([
    { id: '1', text: 'Mobile Programming Assignment', completed: false },
    { id: '2', text: 'Software Engineering Proposal', completed: false },
    { id: '3', text: 'Go jog', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: (prevTodos.length + 1).toString(), text: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const goBackToLogin = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleTodo(item.id)}>
        <Text style={item.completed ? styles.completedText : styles.todoText}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTodo(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.addTodoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.goBackButton} onPress={goBackToLogin}>
        <Text style={styles.goBackButtonText}>Exit Tasking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  list: {
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  removeButton: {
    backgroundColor: '#ff3333',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
  addTodoContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
  goBackButton: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButtonText: {
    color: '#fff',
  },
});

export default TodoList;
