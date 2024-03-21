import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import Button from "./src/components/Button";
import Task from "./src/components/Task";
import styles from "./Global";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState ("")

  function addNewTask() {
    setTasks([...tasks, {text: newTask, completed:false}]);
  } 

  function ToggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  useEffect(() => {



    const inicialTask = [
      { text: "Atividade 1", completed: false },
      { text: "Atividade 2", completed: true },
      { text: "Atividade 3", completed: true },

    ];
    setTasks(inicialTask);
  }, {})

  return (
    <View style={styles.container}>
      <TextInput value={newTask} 
      style={styles.input}
      onchangetext={(text) => setNewTasks(text)}/>
      <Button title="Adicionar" onPress={() => addNewTask()} />
      <View style={styles.listContainer}>
        {tasks.map((task, index) =>(
          <Task key={task.text} isChecked={task.completed} label={task.text} 
          onPress={() => ToggleTask(index)} />
        ))}
        
      </View>
    </View>
  )
};
