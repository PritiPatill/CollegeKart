import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 16,
  },
  input: {
    backgroundColor: COLORS.lightGray,
    padding: 14,
    borderRadius: 8,
  },
});
