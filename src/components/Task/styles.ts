import { StyleSheet } from 'react-native'
import { defaultThemeColor } from '../../styles/themes/default'

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingLeft: 12,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: defaultThemeColor['gray-600'],
    borderRadius: 6,
    // borderBottomLeftRadius: 12,
    // borderTopLeftRadius: 12,
    borderColor: defaultThemeColor['gray-100'],
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultThemeColor['red-500'],
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    width: 60,
    height: 60,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultThemeColor['gray-100'],
  },
  names: {
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultThemeColor['gray-100'],
    // width: '100%',
    alignItems: 'center',
  },
})
