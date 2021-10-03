import styles from './title.module.css'
import PropTypes from "prop-types";


export function Title({ stats }) {
    const { title } = stats;
    return (
         <h2 className={styles.title}>{ title}</h2>
    )
}
Title.propType = {
    title: PropTypes.string
}