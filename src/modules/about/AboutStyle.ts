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
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 12,
  },
  text: {
    color: COLORS.gray,
    marginTop: 6,
  },
});
