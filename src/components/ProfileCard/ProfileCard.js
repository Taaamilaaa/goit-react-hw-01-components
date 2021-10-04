import styles from './profileCard.module.css';
import PropTypes from 'prop-types';

export function Profile({ name, avatar, tag, location, stats }) {
    const { followers, likes, views } = stats;
    return (<div className={ styles.profile}>
        <div className={styles.description}>
    <img
                src={avatar}
                alt={name}
                className={styles.avatar}
    />
            <p className={styles.name}>{ name }</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{ location }</p>
  </div>

        <ul className={styles.stats}>
            
    <li className={styles.item}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{ followers}</span>
    </li>
    <li className={styles.item}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{ views }</span>
    </li>
    <li className={styles.item}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{ likes}</span>
    </li>
  </ul>
</div>)
}
Profile.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}