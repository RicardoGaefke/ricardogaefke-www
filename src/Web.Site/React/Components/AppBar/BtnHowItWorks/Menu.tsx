import React from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Menu, MenuItem, ListItemIcon, Divider,
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DescriptionIcon from '@material-ui/icons/Description';
import setLanguage from './Language';
import Button from '../Button/Button';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    setLanguage();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
      setAnchorEl(null);
    };

    const history = useHistory();

    const onHowClick = (): void => {
      history.push('/how');
      handleClose();
    };

    return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          title={t('BtnHowItWorks:how.title')}
          onClick={handleClick}
        >
          <CodeIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MenuItem title={t('BtnHowItWorks:how.title')} onClick={onHowClick}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            {t('BtnHowItWorks:how.text')}
          </MenuItem>
          <Divider />
          <MenuItem
            title={t('BtnHowItWorks:pdf.title')}
            component="a"
            href="http://pdf.ricardogaefke.com/"
            target="_blank"
            onClick={handleClose}
          >
            <ListItemIcon>
              <PictureAsPdfIcon />
            </ListItemIcon>
            {t('BtnHowItWorks:pdf.text')}
          </MenuItem>
          <MenuItem
            title={t('BtnHowItWorks:xml.title')}
            component="a"
            href="http://webjobs.ricardogaefke.com/"
            target="_blank"
            onClick={handleClose}
          >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            {t('BtnHowItWorks:xml.text')}
          </MenuItem>
        </Menu>
      </>
    );
  },
);
