import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 800px) {
    grid-template-columns: unset;
  }
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  @media (max-width: 800px) {
    width: 200px;
    margin: 0 auto;
  }
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (!stats) {
    return <p>..Loading</p>;
  }
  console.log(stats);
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
  );
}
