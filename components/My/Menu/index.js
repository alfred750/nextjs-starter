import React from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import { useIntl } from '../../../core/hooks'

const menuItems = [
  { to: '/', title: 'menu.home' },
  { to: '/contacts', title: 'menu.contacts' },
  { to: '/about', title: 'menu.about' },
]

const MyMenu = ({ className = '' }) => {
  const { t } = useIntl()
  const classes = classNames('list list_inline', className);
  return (
    <ul className={classes}>
      {menuItems.map((item) => (
        <li key={item.to} className="list__item">
          <Link href={item.to}><a className="list__link">{t(item.title)}</a></Link>
        </li>
      ))}
    </ul>
  );
};

export default MyMenu;
