import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Divider, Chip, Grid,
} from '@material-ui/core';
import Link from '../Link/Link';
import useStyles from './Styles';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <>
      <Typography variant="h3" align="center" className={classes.paragraph} gutterBottom>
        How It Works
      </Typography>
      <Typography variant="subtitle1" align="center" className={classes.paragraph} gutterBottom>
        This is a simple example of ASP.NET Core + SSR React + NGINX WebApp using an Azure Linux docker-compose WebApp.
      </Typography>
      <Divider />
      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        This could be your WebApp/website with incredible performance and really low cost.
      </Typography>

      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Tech summary:
      </Typography>

      <Typography component="div" variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        <Chip label="ASP.NET Core" size="small" className={classes.chip} />
        <Chip label="Azure" size="small" className={classes.chip} />
        <Chip label="Azure Pipelines" size="small" className={classes.chip} />
        <Chip label="Azure SQL" size="small" className={classes.chip} />
        <Chip label="Azure Storage" size="small" className={classes.chip} />
        <Chip label="C#" size="small" className={classes.chip} />
        <Chip label="Docker" size="small" className={classes.chip} />
        <Chip label="GitHub" size="small" className={classes.chip} />
        <Chip label="Material UI" size="small" className={classes.chip} />
        <Chip label="React" size="small" className={classes.chip} />
        <Chip label="Server Side Rendering" size="small" className={classes.chip} />
        <Chip label="Linux" size="small" className={classes.chip} />
        <Chip label="Alpine" size="small" className={classes.chip} />
        <Chip label="NGINX" size="small" className={classes.chip} />
        <Chip label="TypeScript" size="small" className={classes.chip} />
      </Typography>

      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        Check these projects:
      </Typography>
      <Typography variant="body1" component="div" align="justify" className={classes.paragraph}>
        <Link
          href="https://webjobs.ricardogaefke.com/"
          title="webjobs example"
          text="WebJobs example - convert XML to JSON"
        />
      </Typography>
      <Typography variant="body1" component="div" align="justify" className={classes.paragraph}>
        <Link
          href="https://pdf.ricardogaefke.com/"
          title="webjobs example"
          text="WebJobs example - generate PDF certificate"
        />
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        GitHub
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        The repo of this example is public and can be found&nbsp;
        <Link
          href="https://github.com/RicardoGaefke/ricardogaefke-www"
          target="_blank"
          title="ricardogaefke-www repo"
          text="here"
        />
        .
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        Docker registry
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        The containers of this app are registered in a public repo and can be found&nbsp;
        <Link
          href="https://hub.docker.com/r/ricardogaefke/ricardogaefke-www"
          target="_blank"
          title="ricardogaefke-pdf Docker registry"
          text="here"
        />
        .
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center" gutterBottom>
        Azure Pipelines
      </Typography>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          className={classes.grid}
        >
          <Link
            href="https://dev.azure.com/ricardogaefke/ricardogaefke-www/_build?definitionId=31"
            target="_blank"
            title="Build status"
            element={(
              <>
                <img src="https://dev.azure.com/ricardogaefke/ricardogaefke-www/_apis/build/status/ricardogaefke-www" alt="Build status" />
              </>
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          className={classes.grid}
        >
          <Link
            href="https://dev.azure.com/ricardogaefke/ricardogaefke-www/_release?_a=releases&view=mine&definitionId=1"
            target="_blank"
            title="Release status"
            element={(
              <>
                <img
                  src="https://vsrm.dev.azure.com/ricardogaefke/_apis/public/Release/badge/473b0ccf-b380-409c-b457-5db0d7566ff8/1/1"
                  alt="Release status"
                />
              </>
            )}
          />
        </Grid>
      </Grid>

      <Typography component="div" variant="body1" align="justify" className={classes.paragraph}>
        This application is automatically built, tested and deployed by Azure Pipelines. Each
        git push to
        <Chip label="master" size="small" className={classes.label} />
        or to a PR is built and tested by Azure Pipelines. If the build of
        <Chip label="master" size="small" className={classes.label} />
        branch is ok the Release takes place and updates the app using Docker integration.
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        This is the public&nbsp;
        <Link
          href="https://dev.azure.com/ricardogaefke/ricardogaefke-www"
          target="_blank"
          title="ricardogaefke-www Azure Pipeline"
          text="Azure Pipeline"
        />
        .
      </Typography>
    </>
  );
};
