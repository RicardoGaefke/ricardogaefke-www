import { makeStyles } from '@material-ui/core/styles';

interface IStyles {
  text: {},
  bottomSpace: {},
}

export default makeStyles((): IStyles => ({
  text: {
    letterSpacing: '0.02em',
  },
  bottomSpace: {
    marginBottom: 30,
    lineHeight: 1.6,
  },
}));
