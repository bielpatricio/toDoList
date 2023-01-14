import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type TaskProps = {
  name: string
  handleRemoveTask: (name: string) => void
}

export function Task({ name, handleRemoveTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.names}>{name}</Text>

      <TouchableOpacity
        onPress={() => handleRemoveTask(name)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
