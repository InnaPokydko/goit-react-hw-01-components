import PropTypes from 'prop-types';

const TransactionHistory = props => {
  const { transactions } = props;
  return (
    <ul>
      {transactions.map(transaction => (
       <li
       key={transaction.id}
       type={transaction.type}
       amount={transaction.amount}
          currency={transaction.currency}
     >
           </li>
      ))}
      </ul>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;