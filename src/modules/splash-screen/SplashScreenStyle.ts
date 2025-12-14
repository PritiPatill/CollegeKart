import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    color: COLORS.white,
    fontWeight: '700',
  },
});
