import Link from 'next/link';

import classes from './Button3.module.css';

export default function Button(props) {
  const { link, onClick } = props;

  if (!props.link)
    return (
      <button className={classes.btn} onClick={onClick}>
        {props.children}
      </button>
    );

  return (
    <Link href={link}>
      <a className={classes.lnk}>{props.children}</a>
    </Link>
  );
}
