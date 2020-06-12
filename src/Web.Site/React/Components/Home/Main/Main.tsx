import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useStyles from './Styles';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h1" className={`${classes.title} ${classes.textSpacing}`} gutterBottom>
          Incredible WebApps
        </Typography>
        <Typography variant="h2" className={`${classes.subtitle} ${classes.textSpacing} ${classes.bottomSpace}`} gutterBottom>
          I use use Microsoft Azure and modern dev technoligies to provide safety,
          performance and high availability together.
        </Typography>
        <Typography variant="h3" className={`${classes.text} ${classes.textSpacing}`}>
          This is an example of Azure Linux WebApp (docker-compose). It uses ASP.NET Core 3.1 and
          server side rendered React. You can see here the page&nbsp;
          <Link
            title="How It Works"
            color="textPrimary"
            underline="always"
            component={NavLink}
            to="/how"
          >
            How It Works
          </Link>
          .
        </Typography>
      </Container>
    </>
  );
};
