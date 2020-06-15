import React from 'react';
import { Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

interface IProps {
  title: string,
  text?: string,
  href?: string,
  to?: string,
  target?: string | undefined,
  element?: React.ReactNode
}

export default (props: IProps): React.ReactElement<IProps> => {
  const {
    title, text, to, href, element, target,
  } = props;

  return (
    <Link
      title={title}
      color="textPrimary"
      underline="always"
      component={(to !== undefined) ? NavLink : 'a'}
      to={to}
      href={href}
      target={target}
    >
      {text}
      {element}
    </Link>
  );
};
