import { makeStyles } from '@material-ui/core/styles';

interface IStyles {
  container: {},
  paper: {},
}

export default makeStyles((): IStyles => ({
  container: {
    display: 'flex',
    flex: 1,
    paddingBottom: 30,
    '@media screen and (min-width: 768px)': {
      paddingTop: 30,
    },
  },
  paper: {
    paddingBottom: 20,
  },
}));
