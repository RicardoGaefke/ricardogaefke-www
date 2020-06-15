import React from 'react';
import { Typography, Container } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import Link from '../../Link/Link';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    setLanguage();
    const classes = useStyles({});
    const { t } = props;

    return (
      <>
        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h1" className={`${classes.title} ${classes.textSpacing}`} gutterBottom>
            {t('HomePage:title')}
          </Typography>
          <Typography variant="h2" className={`${classes.subtitle} ${classes.textSpacing} ${classes.bottomSpace}`} gutterBottom>
            {t('HomePage:subtitle')}
          </Typography>
          <Typography variant="h3" className={`${classes.text} ${classes.textSpacing}`}>
            {t('HomePage:text')}
            <Link
              title={t('HomePage:link')}
              to="/how"
              text={t('HomePage:link')}
            />
            .
          </Typography>
        </Container>
      </>
    );
  },
);
