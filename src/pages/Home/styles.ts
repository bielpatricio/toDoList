import { StyleSheet } from 'react-native'
import {
  defaultThemeColor,
  defaultThemeSize,
} from '../../styles/themes/default'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultThemeColor['gray-900'],
    paddingTop: 70,
    alignItems: 'center',
  },
  input: {
    padding: 16,
    color: defaultThemeColor.white,
    backgroundColor: defaultThemeColor['gray-600'],
    borderRadius: 6,
    height: 60,
    flex: 1,
    borderColor: defaultThemeColor['purple-500'],
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultThemeColor['blue-500'],
    marginLeft: 10,
    borderRadius: 6,
    width: 60,
    height: 60,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultThemeColor['gray-900'],
  },
  formField: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -32,
    paddingBottom: 20,
  },
  taskField: {
    marginTop: 70,
    width: '100%',
    color: defaultThemeColor['gray-100'],
    backgroundColor: defaultThemeColor['gray-800'],
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  listEmptyText: {
    marginTop: 50,
    color: defaultThemeColor['blue-500'],
    fontSize: defaultThemeSize.lg,
    textAlign: 'center',
  },
  logo: {
    width: 110,
    height: 32,
  },
})
