import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import styles from "./friendList.module.css";

export function FriendList({ friends, children }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        const { id, avatar, name, isOnline } = friend;

        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ),
};
