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
import { defaultThemeColor } from '../../styles/themes/default'
import { Task } from '../../components/Task'
import Icon from 'react-native-vector-icons/Ionicons'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import Logo from '../../assets/logo.png'
import Clipboard from '../../assets/Clipboard.png'

export interface TasksType {
  description: string
  id: string
  checked: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TasksType[]>([])
  const [taskName, setTaskName] = useState('')
  const [taskNumber, setTaskNumber] = useState(0)
  const [taskCompleted, setTaskCompleted] = useState(0)

  function handleAddTask() {
    if (taskName === '') {
      return Alert.alert('Nome do Task', `Coloque um nome válido`)
    }

    setTasks((state) => {
      return [...state, { description: taskName, id: uuidv4(), checked: false }]
    })
    setTaskNumber((state) => state + 1)
    setTaskName('')
  }

  function handleRemoveTask(id: string) {
    Alert.alert(
      'Remover',
      `Remover a task ${
        tasks.find((task) => task.id === id)?.description
      } da lista?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setTasks((state) => {
              return state.filter((task) => task.id !== id)
            })
            setTaskNumber((state) => state - 1)
            Alert.alert('Deletado!')
          },
        },
        {
          text: 'Nao',
          style: 'cancel',
        },
      ],
    )
  }

  function handleCheckTask(id: string) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          if (task.checked) {
            setTaskCompleted((state) => state - 1)
          } else {
            setTaskCompleted((state) => state + 1)
          }
          return { ...task, checked: !task.checked }
        } else {
          return task
        }
      }),
    )
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
            {/* <Text style={styles.buttonText}>+</Text> */}
            <Icon
              style={styles.icon}
              name="add-circle-outline"
              size={36}
              color={defaultThemeColor['gray-200']}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.subHeader}>
            <Text style={styles.textBlue}>Criadas</Text>
            <Text style={styles.numberTask}>{taskNumber}</Text>
          </View>
          <View style={styles.subHeader}>
            <Text style={styles.textPurple}>Concluídas</Text>
            <Text style={styles.numberTask}>{taskCompleted}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              task={item}
              handleRemoveTask={handleRemoveTask}
              key={item.id}
              handleCheckTask={handleCheckTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image source={Clipboard} style={styles.clipboard} />
              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyTextRegular}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
