import PropTypes from 'prop-types';

const Statistics = props => {
  const { title, stats } = props;
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(statistic => (
          <li
            key={statistic.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span>{statistic.label}</span>
            <span>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;
