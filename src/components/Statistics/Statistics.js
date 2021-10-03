import PropTypes from "prop-types";
import styles from './statistics.module.css'

export function Statistics({ stats, children }) {
  const { title } = stats;
  return (
    <section className={styles.statistics}>
      {children}    
        <ul className={styles.statList}>
        {stats.map((el) => {
          const { id, label, percentage } = el;
          return (
            <li key={id} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
    title: "Default text"
}
Statistics.propType = {
  children: PropTypes.element,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
