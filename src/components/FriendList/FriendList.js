import PropTypes from 'prop-types';
import styles from './friendList.module.css'


export function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map((friend) => {
                const { id, avatar, name, isOnline } = friend;
            
                return (
                    <li key={id} className={styles.item}>
                        { isOnline  === false ? (<span className={styles.statusOf}>{ isOnline}</span>)
:                         (<span className={styles.statusOn}>{ isOnline}</span>)
}
                        <img className={styles.avatar} src={avatar} alt= {name} width="48" />
                        <p className={styles.name}>{ name}</p>
</li>
                )
    
})}
  </ul>
    )
}

FriendList.propType = {
    friends: PropTypes.arrayOf(PropTypes.shape ({
        name: PropTypes.string,
        avatar: PropTypes.string,
        id: PropTypes.number,
        isOnline: PropTypes.bool,
    }))
}