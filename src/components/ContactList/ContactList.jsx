import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

import listItemsActions from 'animations/listItemsActions.module.css';

const ContactList = ({ items, cssRef: contactListRef }) => {
  if (!items.length) {
    return null;
  }
  return (
    <section className={styles.ContactsList} ref={contactListRef}>
      <TransitionGroup component="ul" className={styles.ContactsList__list}>
        {items.map(({ id }) => {
          const contactItemRef = React.createRef();
          return (
            <CSSTransition
              key={id}
              timeout={250}
              classNames={listItemsActions}
              appear={true}
              nodeRef={contactItemRef}
            >
              <ContactItem itemId={id} cssRef={contactItemRef} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
};

ContactList.defaultProps = { items: [] };

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const filterContacts = (items, filter) => {
  const search = filter.trim().toLowerCase();
  if (filter) {
    return items.filter(({ name }) => name.toLowerCase().indexOf(search) >= 0);
  }
  return [...items];
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  return { items: filterContacts(items, filter) };
};

export default connect(mapStateToProps, null)(ContactList);
