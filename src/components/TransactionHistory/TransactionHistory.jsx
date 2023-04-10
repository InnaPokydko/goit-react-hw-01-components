import PropTypes from 'prop-types';
import { TransHisTable,  TransHisTrTitle, TransHisTr, TransHisTd} from './TransactionHistory.styled';

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
            <TransHisTd>{item.type}</TransHisTd>
            <TransHisTd>{item.amount}</TransHisTd>
            <TransHisTd>{item.currency}</TransHisTd>
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
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;