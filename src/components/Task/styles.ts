import { StyleSheet } from 'react-native'
import {
  defaultThemeColor,
  defaultThemeSize,
} from '../../styles/themes/default'

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingLeft: 12,
    width: '100%',
    height: 84,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: defaultThemeColor['gray-600'],
    borderRadius: 6,
    borderColor: defaultThemeColor['gray-100'],
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 3,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    width: 60,
    height: 60,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: defaultThemeSize.md,
    color: defaultThemeColor['gray-100'],
  },
  description: {
    fontWeight: 'bold',
    fontSize: defaultThemeSize.md,
    color: defaultThemeColor['gray-100'],
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  descriptionTaskCompleted: {
    fontWeight: 'bold',
    fontSize: defaultThemeSize.md,
    color: defaultThemeColor['gray-500'],
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    textDecorationLine: 'line-through',
  },
})
