import PropTypes from "prop-types";
import style from './transactions.module.css'

export function TransactionHistory({ item }) {
    return (
      <table className={style.transaction}>
  <thead>
    <tr className = {style.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody className = {style.content}>
          {item.map((el) => {
            const { id, type, amount, currency } = el;
            return (<tr>
            <td>{ type}</td>
            <td>{ amount}</td>
            <td>{ currency}</td>
    </tr>)

          })}
  
  </tbody>
</table>

    )
}
TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }
  ))
}
