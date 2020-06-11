import React from 'react';
import { Typography, Container } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h1" className={classes.text} gutterBottom>
          Incredible WebApps
        </Typography>
        <Typography variant="h5" className={`${classes.text} ${classes.bottomSpace}`} gutterBottom>
          I use use cloud computing to create the best experience ever. Safety,
          performance and high availability together.
        </Typography>
        <Typography variant="h6" className={classes.text}>
          I have the pleasure of been a developer for the last 20 years. In all these years
          I created apps for several market segments: Government, United Nations Organization,
          oil companies, education and more.
        </Typography>
      </Container>
    </>
  );
};
