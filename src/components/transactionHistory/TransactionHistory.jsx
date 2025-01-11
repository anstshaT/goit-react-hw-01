import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id} className={style.tableComponents}>
              <td className={style.tbType}>{item.type}</td>
              <td className={style.tbItem}>{item.amount}</td>
              <td className={style.tbItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
