import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { defaultThemeColor } from '../../styles/themes/default'
import React, { useState } from 'react'
import { TasksType } from '../../pages/Home'

type TaskProps = {
  task: TasksType
  handleRemoveTask: (id: string) => void
  handleCheckTask: (id: string) => void
}

export function Task({ task, handleRemoveTask, handleCheckTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCheckTask(task.id)}>
        <Icon
          style={styles.icon}
          name={
            task.checked
              ? 'checkbox-marked-circle'
              : 'checkbox-blank-circle-outline'
          }
          size={36}
          color={
            task.checked
              ? defaultThemeColor['purple-300']
              : defaultThemeColor['blue-500']
          }
        />
      </TouchableOpacity>

      <Text
        style={
          task.checked ? styles.descriptionTaskCompleted : styles.description
        }
      >
        {task.description}
      </Text>

      <TouchableOpacity
        onPress={() => handleRemoveTask(task.id)}
        style={styles.button}
      >
        {/* <Text style={styles.buttonText}>-</Text> */}
        <Icon
          name="trash-can"
          size={32}
          color={defaultThemeColor['gray-500']}
        />
      </TouchableOpacity>
    </View>
  )
}
