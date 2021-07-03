import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import React from 'react';

import AppBar from 'components/AppBar';
import ContactForm from 'components/ContactForm';
import Notification from 'components/Notification';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import styles from './PhoneBook.module.css';

import appearZoom from 'animations/appearZoom.module.css';

const PhoneBook = ({ contacts }) => {
  const contactListRef = React.createRef();
  return (
    <>
      <div className={styles.PhoneBook}>
        <AppBar />
        <ContactForm />
        {contacts.length > 1 && <Filter />}

        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={appearZoom}
          nodeRef={contactListRef}
          unmountOnExit
        >
          <ContactList cssRef={contactListRef} />
        </CSSTransition>
      </div>

      <Notification />
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(PhoneBook);
