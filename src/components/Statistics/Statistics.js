import PropTypes from "prop-types";
import styles from './statistics.module.css'

// function randomColor() {
//   const color = (Math.random().toString(16) + '000000')
//     .substring(2, 8)
//     .toUpperCase();
//   const bgc = { backgroundColor: `#${color}` };
//  return bgc;
// }

// const bgc = randomColor();


export function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
        
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
