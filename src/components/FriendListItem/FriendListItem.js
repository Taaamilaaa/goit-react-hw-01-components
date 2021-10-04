import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

export function FriendListItem({ id, name, avatar, isOnline }) {
  return (
    <li key={id} className={styles.item}>
      {isOnline === false ? (
        <span className={styles.statusOf}>{isOnline}</span>
      ) : (
        <span className={styles.statusOn}>{isOnline}</span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
};
