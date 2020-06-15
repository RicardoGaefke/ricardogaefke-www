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
        Como funciona
      </Typography>
      <Typography variant="subtitle1" align="center" className={classes.paragraph} gutterBottom>
        Este é um exemplo simples de aplicação usando ASP.NET Core + SSR React + NGINX em um
        Azure WebApp Linux com docker-compose.
      </Typography>
      <Divider />
      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        Este poderia ser teu WebApp/website com incrível performance e um custo realmente baixo.
      </Typography>

      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Tech summary:
      </Typography>

      <Typography variant="body1" align="justify" className={classes.paragraph}>
        <Chip label="ASP.NET Core" size="small" className={classes.chip} />
        <Chip label="Azure" size="small" className={classes.chip} />
        <Chip label="Azure Pipelines" size="small" className={classes.chip} />
        <Chip label="Azure SQL" size="small" className={classes.chip} />
        <Chip label="Azure Storage" size="small" className={classes.chip} />
        <Chip label="Azure WebApp" size="small" className={classes.chip} />
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
        Conheça estes outros projetos:
      </Typography>
      <Typography variant="body1" component="div" align="justify" className={classes.paragraph}>
        <Link
          href="https://webjobs.ricardogaefke.com/"
          title="Exemplo de WebJob"
          text="WebJob - converter XML para JSON"
        />
      </Typography>
      <Typography variant="body1" component="div" align="justify" className={classes.paragraph}>
        <Link
          href="https://pdf.ricardogaefke.com/"
          title="Exemplo de WebJob"
          text="WebJob - gerar um certificado em PDF"
        />
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        GitHub
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        O repositório completo desta aplicação é público e pode ser encontrado&nbsp;
        <Link
          href="https://github.com/RicardoGaefke/ricardogaefke-www"
          target="_blank"
          title="ricardogaefke-www repo"
          text="aqui"
        />
        .
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        Docker registry
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        As imagens Docker desta aplicação estão registradas em um repositório Docker
        público e podem sem encontradas&nbsp;
        <Link
          href="https://hub.docker.com/r/ricardogaefke/ricardogaefke-www"
          target="_blank"
          title="ricardogaefke-pdf Docker registry"
          text="aqui"
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

      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Esta aplicação tem&nbsp;
        <i>build</i>
        , teste e&nbsp;
        <i>deploy</i>
        &nbsp;feitos automaticamente pelo Azure Pipelines. Cada vez que a branch
        <Chip label="master" size="small" className={classes.label} />
        do repositório no GitHub é alterada, o&nbsp;
        <i>build</i>
        &nbsp;é automático. Se tudo correr bem, o&nbsp;
        <i>deploy</i>
        &nbsp;tem início imediato e atualiza a aplicação. Lembrando que todos
        os PRs feitos na branch
        <Chip label="master" size="small" className={classes.label} />
        também são validados pelo&nbsp;
        <i>Pipeline</i>
        .
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        Este é o link para o&nbsp;
        <Link
          href="https://dev.azure.com/ricardogaefke/ricardogaefke-www"
          target="_blank"
          title="ricardogaefke-www Azure Pipeline"
          text="Azure Pipeline"
        />
        &nbsp;público.
      </Typography>
    </>
  );
};
