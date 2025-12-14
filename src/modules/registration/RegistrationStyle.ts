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
    marginBottom: 24,
  },
  input: {
    backgroundColor: COLORS.lightGray,
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  btnText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15%',
    marginTop: '15%',
  },
  imageContainer: {
    width: 200,
    height: 100,
  },
  image: { width: '100%', height: '100%' },
});
