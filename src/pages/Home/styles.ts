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
    borderColor: defaultThemeColor['gray-900'],
    borderWidth: 2,
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
    textAlign: 'center',
    backgroundColor: defaultThemeColor['blue-700'],
    marginLeft: 10,
    borderRadius: 10,
    width: 60,
    height: 60,
    opacity: 0.8,
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
  listEmpty: {
    marginTop: 50,
    textAlign: 'center',
    alignItems: 'center',
  },
  listEmptyTextBold: {
    color: defaultThemeColor['gray-500'],
    fontSize: defaultThemeSize.lg,
    fontWeight: 'bold',
    marginTop: 20,
  },
  listEmptyTextRegular: {
    color: defaultThemeColor['gray-500'],
    fontSize: defaultThemeSize.lg,
    fontWeight: 'normal',
    marginTop: 5,
  },
  logo: {
    width: 110,
    height: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 5,
  },
  numberTask: {
    color: defaultThemeColor['gray-100'],
    backgroundColor: defaultThemeColor['gray-500'],
    fontSize: defaultThemeSize.lg,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    paddingLeft: 9,
    paddingRight: 9,
  },
  textBlue: {
    color: defaultThemeColor['blue-500'],
    fontSize: defaultThemeSize.lg,
    marginRight: 10,
  },
  textPurple: {
    color: defaultThemeColor['purple-500'],
    fontSize: defaultThemeSize.lg,
    marginRight: 10,
  },
  clipboard: {
    width: 100,
    height: 100,
  },
})
