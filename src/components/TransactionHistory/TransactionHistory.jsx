import PropTypes from 'prop-types';
import { TransHisTable,  TransHisTrTitle, TransHisTr} from './TransactionHistory.styled';

const TransactionHistory = props => {
  const { items } = props;
  return (
    <TransHisTable>
      <thead>
        <TransHisTrTitle>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransHisTrTitle>
      </thead>

      <tbody>
        {items.map(item => (
          <TransHisTr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TransHisTr>
        ))}
      </tbody>
    </TransHisTable>
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