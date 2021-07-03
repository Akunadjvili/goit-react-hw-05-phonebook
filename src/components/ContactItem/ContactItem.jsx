import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactItem.module.css';

import * as actions from 'redux/contacts/contacts-actions';

const ContactItem = class ContactItem extends Component {
  state = {};
  componentDidMount() {
    const { id, contact, onDelete } = this.props;
    this.setState({ id, contact, onDelete });
  }

  render() {
    const { contact: { id, name, number } = {}, onDelete } = this.state;
    return (
      <li className={styles.item} ref={this.props.cssRef}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.phone}>{number}</p>
        <button className={styles.button} onClick={() => onDelete(id)}>
          &#9587;
        </button>
      </li>
    );
  }
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const { itemId: contactId } = props;
  const contact = state.contacts.items.find(({ id }) => id === contactId);
  return { contact };
};

const mapDispatchToProps = dispatch => ({
  onDelete: value => dispatch(actions.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
