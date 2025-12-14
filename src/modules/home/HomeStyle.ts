import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
  },
  text: {
    marginTop: 8,
    color: COLORS.gray,
  },
});
