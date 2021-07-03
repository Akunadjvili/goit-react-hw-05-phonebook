import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from 'components/AppBar/AppBar.module.css';
import appearFromLeft from 'animations/appearFromLeft.module.css';

const AppBar = () => {
  const ref = React.createRef();
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      nodeRef={ref}
      classNames={appearFromLeft}
      unmountOnExit
    >
      <header ref={ref} className={styles.AppBar}>
        <Link className={styles['logo-link']} to="./index.html">
          PhoneBook
        </Link>
      </header>
    </CSSTransition>
  );
};

export default AppBar;
