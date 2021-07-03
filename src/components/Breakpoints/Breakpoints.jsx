import PropTypes from 'prop-types';
import styles from './Breakpoints.module.css';

const Breakpoints = ({ children }) => {
  return <div className={styles.Breakpoints}>{children}</div>;
};

Breakpoints.defaultProps = {};

Breakpoints.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Breakpoints;
