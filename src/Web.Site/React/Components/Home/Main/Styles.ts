import { makeStyles } from '@material-ui/core/styles';

interface IStyles {
  container: {},
  subtitle: {},
  title: {},
  text: {},
  textSpacing: {},
  bottomSpace: {},
}

export default makeStyles((): IStyles => ({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    '@media screen and (max-width: 768px)': {
      fontSize: '4rem',
    },
    fontSize: '5rem',
  },
  subtitle: {
    lineHeight: 1.4,
    fontSize: '2rem',
    '@media screen and (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    '@media screen and (max-width: 768px)': {
      fontSize: '1.1rem',
    },
  },
  textSpacing: {
    letterSpacing: '0.01em',
  },
  bottomSpace: {
    marginBottom: 30,
  },
}));
