import styles from 'components/Notification/Notification.module.css';
import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import fadeFromRight from 'animations/fadeFromRight.module.css';

const place = document.querySelector('#notify');

const Notification = ({ message, isNotify }) => {
  const notifyRef = React.createRef();
  return createPortal(
    <CSSTransition
      in={isNotify}
      timeout={250}
      classNames={fadeFromRight}
      nodeRef={notifyRef}
      unmountOnExit
    >
      <div className={styles.Notification} ref={notifyRef}>
        <p>{message}</p>
      </div>
    </CSSTransition>,
    place,
  );
};
const mapStateToProps = state => ({
  message: state.contacts.notify.message,
  isNotify: state.contacts.notify.state,
});

export default connect(mapStateToProps, null)(Notification);
