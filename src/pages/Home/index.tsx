import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react'

import Logo from '../../assets/logo.png'
import { defaultThemeColor } from '../../styles/themes/default'
import { Task } from '../../components/Task'

interface TasksType {
  name: string
  id: number
}

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')

  function handleAddTask() {
    if (tasks.includes(taskName)) {
      return Alert.alert('Task Existe', `${taskName} já esta na lista`)
    }

    if (taskName === '') {
      return Alert.alert('Nome do Task', `Coloque um nome válido`)
    }

    setTasks((state) => {
      return [...state, taskName]
    })
    setTaskName('')
  }

  function handleRemoveTask(name: string) {
    Alert.alert('Remover', `Remover o task ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((state) => {
            return state.filter((task) => task !== name)
          })
          Alert.alert('Deletado!')
        },
      },
      {
        text: 'Nao',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.taskField}>
        <View style={styles.formField}>
          <TextInput
            style={styles.input}
            placeholder="Nome do task"
            placeholderTextColor={defaultThemeColor['gray-500']}
            value={taskName}
            onChangeText={setTaskName}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task name={item} handleRemoveTask={handleRemoveTask} key={item} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <Text style={styles.listEmptyText}>
                Você ainda não tem tarefas cadastradas{'\n'} Crie tarefas e
                organize seus itens a fazer
              </Text>
            </>
          )}
        />
      </View>
    </View>
  )
}
